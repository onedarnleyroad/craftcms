
import { docReady } from "libs/helpers";

docReady( () => {

	const header = document.getElementById('site-header');
	if ( !header ) {
		return;
	}

	let state = "top";

	const stuck = () => {
		if ( state === "top" ) {
			state = "stuck";
			header.setAttribute('data-state', "stuck" );
		}
	};

	const unstuck = () => {
		if ( state === "stuck" ) {
			state = "top";
			header.setAttribute('data-state', "top" );
		}
	};

	const scroll = () => {
		if ( window.pageYOffset > 2 ) {
			stuck();
		} else {
			unstuck();
		}
	};

	scroll();
	window.addEventListener('scroll', scroll );

});
