/* eslint-disable quote-props */
// Convert a unit to rem, eg...
// p-4 -> 1rem;
const rem = (i) => `${i * 4 / 16}rem`;

const makeRange = (from, to, step, cb) => {
	const config = {};
	for (let i = from; i <= to; i += step) {
		config[i] = cb(i);
	}
	return config;
};

const spacing = {
	px: '1px',
	'2px': '2px',
	// It's a lot. But, this is the design studio we're in,
	// you need a lot of random sizes, so let's just lean on purge...
	...makeRange(0, 80, 1, rem),
	...makeRange(80, 200, 4, rem)	
};

const columns = {
	c0: '0%', // c1 // '1/12':
	c05: '4.166%', // c1 // '1/12':
	c1: '8.333%', // c1 // '1/12':
	c2: '16.66667%', // c2 // '1/6':
	c3: '25%', // c3 // '1/4':
	c4: '33.33333%', // c4 // '1/3':
	c5: '41.667%', // c5 // '5/12':
	c6: '50%', // c6 // '1/2':
	c7: '58.333%', // c7 // '7/12':
	c8: '66.66667%', // c8 // '2/3':
	c9: '75%', // c9 // '3/4':
	c10: '83.33333%', // c10 // '5/6':
	c11: '91.667%', // c11 // '11/12':
	
	// Decimal columns, it happens sometimes, and is 
	// useful for 5ths
	d1: '10%',
	d2: '20%',
	d3: '30%',
	d4: '40%',
	d5: '50%',
	d6: '60%',
	d7: '70%',
	d8: '80%',
	d9: '90%',
	
};

module.exports = {
	prefix: '',
	important: false,
	separator: ':',
	theme: {
		aspectRatio: {
			'16x9': 16 / 9,
			'3x2': 3 / 2,
			'1x1': 1,
		},
		screens: {
			sm: { min: '640px' },
			md: { min: '768px' },
			lg: { min: '1024px' },
			xl: { min: '1441px' },
			'xl2': { min: '1600px' },
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',

			// Use CSS vars for themes:
			// theme: 'var(--theme-color, rgb(30, 34, 169) )',
			
			// Use make range to create a range of opacity, eg
			black: {
				default: 'rgba(0,0,0,1)',
				// will produce black-10, black-20, eg rgba(0,0,0,0.1) and so on....
				...makeRange(10, 90, 10, i => `rgba(0,0,0,${i / 100})`)
			},
			white: {
				default: 'rgba(255,255,255,1)',
				...makeRange(10, 90, 10, i => `rgba(255,255,255,${i / 100})`)
			},
		},

		spacing: {
			...spacing,
			...columns
		},

		namedWidths: {
			'xs': '20rem',
			'sm': '24rem',
			'md': '28rem',
			'lg': '32rem',
			'xl': '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			
			full: '100%',
			screenw: '100vw',
			screenh: '100vh',
		},

		backgroundColor: theme => theme('colors'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		borderColor: theme => ({
			...theme('colors'),
			default: 'currentColor',
		}),
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			default: '0.25rem',
			lg: '0.5rem',
			full: '9999px',
		},
		borderWidth: {
			default: '1px',
			0: '0',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			none: 'none',
		},
		container: {},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			'not-allowed': 'not-allowed',
		},
		fill: {
			current: 'currentColor',
			white: 'white',
			black: 'black',
		},
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexGrow: {
			0: '0',
			default: '1',
		},
		flexShrink: {
			0: '0',
			default: '1',
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
			mono: [				
				'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'
			],
		},
		fontSize: {
			// Fonts from 10px to 60px, in REM:
			// eg text-10, text-11 ... text-60
			...makeRange(10, 60, 1, i => `${i / 16}rem`),
			// text-62, text-64 etc...
			...makeRange(62, 70, 2, i => `${i / 16}rem`),
		},
		fontWeight: {
			light: '300',
			normal: '400',
			bold: '700',
		},
		
		inset: {
			0: '0',
			20: '20%',
			25: '25%',
			50: '50%',
			75: '75%',
			100: '100%',
			auto: 'auto',
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			0: '0em',
			normal: '0.0045em',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
			uppercase: '0.1667em',
		},
		lineHeight: {
			none: '1',
			tighter: '1.15',
			tight: '1.25',
			snug: '1.375',
			normal: '1.45',
			relaxed: '1.625',
			loose: '2',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
		},

		// For all "sizes", use the same approach, 
		// but it's a lot going in. It's flexible, and purge helps us,
		// so I think it's fine, but you may wish for clarity.
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		width: theme => ({
			auto: 'auto',
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		height: theme => ({
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		padding: theme => ({
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		maxHeight: theme => ({
			full: '100%',
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		maxWidth: theme => ({
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		minHeight: theme => ({
			...theme('spacing'),
			...theme('namedWidths'),
		}),
		minWidth: theme => ({
			...theme('spacing'),
			...theme('namedWidths'),
		}),

		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			...makeRange(0, 100, 5, o => `${o/100}`)
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			0: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		
		stroke: {
			current: 'currentColor',
		},
		textColor: theme => theme('colors'),
		
		zIndex: {
			auto: 'auto',
			0: '0',
			...makeRange(0, 9, 1, z => `${z}`),
			...makeRange(10, 50, 10, z => `${z}`),
			top: '1000',
			modal: '9999',
			a1: '999910',
			a2: '999920',
			a3: '999930',
			a4: '999940',
			a5: '999950',
			a6: '999960',
		},
	},
	variants: {
		aspectRatio: ['responsive'],
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: ['responsive'],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
		cursor: ['responsive'],
		display: ['responsive'],
		fill: ['responsive', 'group-hover'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		float: ['responsive'],
		fontFamily: ['responsive'],
		fontSize: ['responsive'],
		fontSmoothing: ['responsive'],
		fontStyle: ['responsive'],
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['responsive', 'hover', 'group-hover'],
		order: ['responsive'],
		outline: ['responsive', 'focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		stroke: ['responsive'],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'group-hover', 'hover', 'focus'],
		textDecoration: ['responsive', 'hover', 'group-hover', 'focus'],
		textTransform: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: ['responsive'],
	},
	corePlugins: {},
	plugins: [

		// ASPECT RATIO:
		function({ theme, addUtilities, variants }) {

			const base = {
				height: '0',
				width: '100%',
				position: 'relative',
				overflow: 'hidden',
			};

			addUtilities({
				'.ar-base': base
			});

			Object.entries(theme('aspectRatio')).forEach(([key, value]) => {
				addUtilities({
					[`.ar-${key}`]: {
						...base,
						paddingBottom: `${100 / ( value )}%`,
					}
				}, {
					variants: variants('aspectRatio')
				});
			});



		},
	],
};