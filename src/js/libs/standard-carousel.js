import Flickity from 'flickity';
import "flickity/css/flickity.css";
import "@css/components/flickity-overrides.scss";

export const standardCarousel = function (carousel, selector) {

	return new Flickity(carousel, {
		// EG...
		// cellSelector: selector,
		// prevNextButtons: true,
		// pageDots: false,
		// adaptiveHeight: false,
		// wrapAround: true,
		// setGallerySize: false,
		// arrowShape: `M65.5,98c-2.3,0-4.7-0.9-6.5-2.6l-39-39c-3.5-3.5-3.5-9.4,0-12.9l39-39c3.5-3.5,9.4-3.5,12.9,0c3.5,3.5,3.5,9.4,0,12.9
		// L39.4,50L72,82.4c3.5,3.5,3.5,9.4,0,12.9C70.2,97.1,67.8,98,65.5,98z`
	});
};

export default standardCarousel;
