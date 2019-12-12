// NEW NODE / BROWSERIFY VERSION

const mq = ('matchMedia' in window);

const generateRule = function( query ) {
	if (typeof query === "string") {
		return query;
	}

	if (query.hasOwnProperty('max') && query.hasOwnProperty('min')) {
		return `(min-width: ${query.min}) and (max-width: ${query.max})`;
	}

	if (query.hasOwnProperty('min')) {
		return `(min-width: ${query.min})`;
	}
	if (query.hasOwnProperty('max')) {
		return `(max-width: ${query.max})`;
	}
	
	return false;
};


export class MediaQueries {
	constructor(config, debug) {
		if (!mq) {
			console.error("matchMedia not supported on this browser");
			return false;
		}
		const defaults = {
			desktop: {
				min: "1367px"
			},
			laptop: {
				max: "1366px"
			},
			tablet: {
				max: "1024px"
			},
			mobile: {
				max: "480px"
			},
		};
		this.breakpoints = config || defaults;

		this.queries = {};

		Object.entries( this.breakpoints ).forEach( ([ key, query ]) => {
			this.queries[ key ] = window.matchMedia( generateRule( query ) );
		});

		return this;
	}

	_getMatchMedia( key ) {
		return this.queries[ key ] || false;
	}

	matches(key) {
		return this._getMatchMedia( key ).matches;
	}
	
	on(key, fn) {
		const mediaQuery = this._getMatchMedia( key );
		if (!mediaQuery) {
			console.error(`${key} not found`);
			return;
		}
		mediaQuery.addEventListener('change', function() {
			fn(mediaQuery.matches);
		});
	}
}


export default { MediaQueries };
