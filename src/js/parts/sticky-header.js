
import { docReady, qsa } from "@/libs/helpers";
import { media } from "@/parts/media";


let header;
let locked = false;
let lastScrollY = 0;
let totalMovement = 0;
let max = 200 * 2;
const min = 0;

const limit = function (n) {
	return Math.min(max, Math.max(min, n));
};

let state = "top";

const stuck = () => {
	if (state === "top") {
		state = "stuck";
		header.setAttribute('data-state', "stuck");
	}
};

const unstuck = () => {
	if (state === "stuck") {
		state = "top";
		header.setAttribute('data-state', "top");
	}
};

const paint = () => {

	if ( locked ) {
		return;
	}

	max = header.offsetHeight * 2;

	const y = -0.5 * totalMovement;

	header.style.transform = `translateY(${y}px)`;

	if (window.pageYOffset > 200 && media.matches('md') ) {
		stuck();
	} else {
		unstuck();
	}
};

const scroll = () => {
	totalMovement = limit(totalMovement + (window.pageYOffset - lastScrollY));
	lastScrollY = Math.max(0, window.pageYOffset);
	requestAnimationFrame(paint);
};

export const lockHeader = () => {
	if ( header ) {
		// Trigger stuck / untuck, conditioonally
		paint();
		header.style.transform = `translateY(0px)`;
		locked = true;
	}
};

export const unlockHeader = () => {
	if ( header ) {
		locked = false;
		paint();
	}
};

export const initHeader = () => {
	docReady(() => {

		header = document.getElementById('site-header');	

		window.header = header;

		if (!header) {
			return;
		}

		scroll();
		window.addEventListener('scroll', scroll);

	});
};

export default { initHeader, unlockHeader, lockHeader };
