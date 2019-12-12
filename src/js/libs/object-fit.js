import { qsa, docReady } from "@/libs/helpers";

export const objectFit = () => {

	// if the page is being rendered on the server, don't continue
	if (typeof window === "undefined") {
		return;
	}

	// Workaround for Edge 16+, which only implemented object-fit for <img> tags
	// TODO: Keep an eye on Edge to determine which version has full final support
	const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
	const edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;

	// If the browser does support object-fit, we don't need to continue
	if ("objectFit" in document.documentElement.style !== false && !edgePartialSupport) {
		return;
	}

	docReady(() => {

		qsa(`img[class*="object-fit-cover"]`, el => {
			console.log(el);

			let sources = el.getAttribute('srcset');
			if (!sources) {
				sources = el.getAttribute('src');
			}

			const src = sources.split(' ')[0].trim();
			console.log(src);

			el.style.opacity = 0;
			const parent = el.parentElement;
			parent.classList.add('bg-center');
			parent.classList.add('bg-cover');
			parent.style.backgroundImage = `url(${src})`;

		});

		window.addEventListener("resize", function () {

		});
	});

};
export default { objectFit };
