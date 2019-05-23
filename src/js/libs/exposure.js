
import { qsa } from "@libs/helpers";


const defaults = {
	selector: '[data-exposure-cell]',
	maxHeight: 300
};


const _setSize = function (el, w, h) {
	el.style.width = `${w}px`;
	el.style.height = `${h}px`;
};

const _layout = function _layout(container, elements, options) {

	let row;
	let rowWidth;
	let rowHeight;
	let elementWidth;
	let remainingWidth;

	// Ensure to round down in case calc had a percent

	const containerWidth = Math.floor(container.offsetWidth);
	console.log(container.offsetWidth, containerWidth);

	const _w = function (width, height) {
		// resize an element so that it matches the height
		// of the row's first element, and return the width
		return (row.length > 1) ? Math.round(width * row[0].height / height) : width;
	};

	const _reset = function () {
		// console.log('reset');
		row = [];
		rowWidth = rowHeight = elementWidth = remainingWidth = 0;
	};

	// reset for first run
	_reset();

	for (let i = 0; i < elements.length; i++) {

		// add element to end of row
		row.push(elements[i]);
		// console.log(elements[i]);

		// update total row width
		rowWidth += _w(elements[i].width, elements[i].height);
		// console.log('row width: ' + rowWidth);

		// calculate row height if the row was sized to 100% of container
		rowHeight = Math.round(row[0].width / rowWidth * containerWidth * row[0].aspectRatio);
		// console.log('row height: ' + rowHeight);

		// is row height within bounds, or have we reached the last row?
		if (rowHeight <= options.maxHeight || i == elements.length - 1) {

			// console.log('within bounds or at last row');

			// set remaining width to container width
			remainingWidth = containerWidth;

			for (let j = 0; j < row.length; j++) {

				// calculate element width based on row height
				elementWidth = Math.round(rowHeight / row[j].aspectRatio);
				// console.log('element width: ' + elementWidth);

				// if the calculated width is less than remaining,
				// or if it's the last element in row,
				// then set element width to remaining width
				if (remainingWidth < elementWidth || j == row.length - 1) {
					elementWidth = remainingWidth;
				}

				// apply width & height styles to element
				_setSize(row[j].el, elementWidth, rowHeight);

				// re-calculate remaining width, floored, in case of accidental
				// over-size, and remove 1 pixel in case of weird breakages
				remainingWidth = Math.floor(remainingWidth - elementWidth - 1);
				// console.log('remaining width: ' + remainingWidth);
			}

			// start a new row
			_reset();
		}
	}
};

let _uidCounter = 0;

export const Exposure = function (container, o = {}) {

	this.options = Object.assign({}, defaults, o);
	this.container = container;

	this.$elements = container.querySelectorAll(this.options.selector);
	this.elements = [];

	this.uid = _uidCounter + 1;
	_uidCounter++;

	qsa(this.$elements, el => {

		const e = el;


		const w = parseInt(e.getAttribute('data-w'));


		const h = parseInt(e.getAttribute('data-h'));


		const r = h / w;

		this.elements.push({
			el: e,
			width: w,
			height: h,
			aspectRatio: r
		});
	});

	// fire layout for the first time
	this.layout();

	window.addEventListener('resize', () => {
		this.layout();
	});

	return this;
};

Exposure.prototype.layout = function () {
	_layout(this.container, this.elements, this.options);
	return this;
};

Exposure.prototype.update = function (o) {
	this.options = Object.assign({}, this.options, o);
	return this;
};

export default { Exposure };
