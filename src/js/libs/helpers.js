

export function qsa(qs, cb) {

	// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
	const _executeQsa = (qs, cb) => {

		// were we passed a selector string or a node list?
		const nodeList = (typeof qs === 'string') ? document.querySelectorAll(qs) : qs;

		if (nodeList instanceof NodeList) {
			nodeList.forEach(function (el, i, list) {
				cb(el, i, list);
			});
		} else if (nodeList) {
			cb(nodeList, 0, nodeList);
		}

		return nodeList;
	};

	// If we were passed an array, then go through
	// each item and execute the callback, and add it to
	// an array to return.
	if (Array.isArray(qs)) {
		const chunks = [];
		qs.forEach((item) => {
			chunks.push(_executeQsa(item, cb));
		});

		return chunks;

	}
	// If we were passed a node list or a string...
	return _executeQsa(qs, cb);


}


// On Load event to use with background images, for example.
export function onSrcLoad(src, cb) {
	const i = document.createElement('img');
	i.src = src;
	i.addEventListener('load', cb);
}


export function initResizeEvents() {


	let resizeEnd;

	const throttle = function (type, name, obj) {

		// Deprecated, but at lease xbrowser compatable.
		// use new CustomerEvent if browsers remove it.
		const event = document.createEvent('Event');
		event.initEvent('resize.throttle', true, true); // can bubble, and is cancellable

		const endEvent = document.createEvent('Event');
		endEvent.initEvent('resize.end', true, true); // can bubble, and is cancellable

		obj = obj || window;
		let running = false;
		const func = function () {
			if (running) { return; }
			running = true;
			requestAnimationFrame(function () {
				obj.dispatchEvent(event);

				// Maybe dispatch an end event?
				clearTimeout(resizeEnd);
				resizeEnd = setTimeout(function () {
					obj.dispatchEvent(endEvent);
				}, 500);

				running = false;
			});
		};

		obj.addEventListener(type, func);
	};

	/* init - you can init any event */
	throttle("resize", "resize.throttle");
}


export function serialize(form) {
	let field;


	let l;


	const s = [];

	if (typeof form === 'object' && form.nodeName == "FORM") {
		const len = form.elements.length;

		for (let i = 0; i < len; i++) {
			field = form.elements[i];
			if (field.name && !field.disabled) {
				if (field.type == 'select-multiple') {
					l = form.elements[i].options.length;

					for (let j = 0; j < l; j++) {
						if (field.options[j].selected) {
							s[s.length] = `${encodeURIComponent(field.name)}=${encodeURIComponent(field.options[j].value)}`;
						}
					}
				} else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
					s[s.length] = `${encodeURIComponent(field.name)}=${encodeURIComponent(field.value)}`;
				}
			}
		}
	}
	return s.join('&').replace(/%20/g, '+');
}


export function docReady(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

export function onClick(selector, callback) {


	if (!selector) { return false; }

	if (typeof callback !== 'function') {
		console.warn("callback was not a function");
		return false;
	}
	const _bind = function (el, cb) {	
		const fn = cb.bind(el);
		el.addEventListener('click', (e) => {
			fn(e);
		});
	};

	if (selector instanceof HTMLElement) {
		_bind(selector, callback);
		return selector;
	}

	return qsa(selector, (el) => {
		_bind(el, callback);
	});


}
