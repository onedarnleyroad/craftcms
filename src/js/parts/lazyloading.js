import 'lazysizes';
import { onSrcLoad } from "libs/helpers";

document.addEventListener('lazybeforeunveil', function (e) {

	const bg = e.target.getAttribute('data-bg');
	const vid = e.target.getAttribute('data-video');
	const svgImage = e.target.getAttribute('data-href');

	// <div data-bg="etc"> turned into background-image
	if (bg) {
		e.target.style.backgroundImage = `url(${bg})`;
		e.target.classList.add('bg-loading');

		// reveal when the image has loaded:
		onSrcLoad(bg, function () {
			e.target.classList.remove('bg-loading');
		});
	}

	// Update <image> tags in SVGS:
	if (svgImage) {
		e.target.classList.add('bg-loading');
		onSrcLoad(svgImage, function () {
			e.target.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', svgImage);
			e.target.classList.remove('bg-loading');
		});
	}
});
