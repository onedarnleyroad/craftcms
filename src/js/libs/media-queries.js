// NEW NODE / BROWSERIFY VERSION

module.exports = (function(w) {

	// usage:
	/*
        Defaults are in place, so:

        (units are necessary, you can use EM if you want)

        desktop: {  min:  "1367px" },
        laptop:  {  max:  "1366px" },
        tablet:  {  max:  "1024px" },
        mobile:  {  max:  "480px" },

        is already set, but can be overriden or added to when initialising

        var media = new MediaQueries({
            desktop: { "1441px"}, ( min width )
            sidebar: { max: "1300px" },
            tablet-only: { max: "1024px", min: "480px" }
        });

        // true when window is max-width 1300px, false otherwise
        console.log( media.matches('sidebar') );

        // true when above mobile but below tablet
        console.log( media.matches('tablet-only') );
    */

	// can we use the matchMedia api?
	// if not use plain old jQuery window size.
	const mq = ('matchMedia' in window);

	const _matchRule = function(rule, debug) {
		const {
			matches
		} = window.matchMedia(rule);

		if (debug) {
			console.log(rule, matches ? "Matches" : "NO");
		}

		return matches;
	};

	const _maxWidth = function(size, debug) {
		return _matchRule(`(max-width: ${size})`, debug);
	};

	const _minWidth = function(size, debug) {
		return _matchRule(`(min-width: ${size})`, debug);
	};

	const _matchStringRule = function(rule, debug) {
		return window.matchMedia(rule).matches;
	};

	const _withinWidth = function(min, max, debug) {
		return _matchRule(`(min-width: ${min}) and (max-width: ${max})`, debug);
	};

	const MediaQueries = function(config, debug) {

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
		return this;
	};

	MediaQueries.prototype.matches = function(keyword, debug) {
		let rule;

		if (typeof keyword === 'object') {
			// rely on user to use correct notation
			rule = keyword;
		} else {
			rule = this.breakpoints[keyword];
		}

		if (!rule) {
			return -1;
		}

		let _return = false;

		const _try = function(query) {


			if (query.hasOwnProperty('max') && query.hasOwnProperty('min')) {
				return _withinWidth(query.min, query.max, debug);
			}
			if (query.hasOwnProperty('min')) {
				return _minWidth(query.min, debug);
			}
			if (query.hasOwnProperty('max')) {
				return _maxWidth(query.max, debug);
			}
			if (typeof query === "string") {
				return _matchStringRule(query, debug);
			}
			return true; // ?


		};

		if (Array.isArray(rule)) {
			rule.forEach(function(_rule) {

				// only set it to true, don't ever
				// set a true back to a false.
				if (_try(_rule)) {
					_return = true;
				}

			});
		} else {
			_return = _try(rule);
		}

		// At this point if anything hit, then _return will be true;;
		return _return;


	};

	return MediaQueries;

}());