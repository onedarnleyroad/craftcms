/* eslint-disable */

const colors = {
	'transparent': 'transparent',
	'current': 'currentColor',
	'white': '#fff',
	'black': '#000',
};

const rem = (i) => `${i * 4 / 16}rem`;

const spacing = {
	px: '1px',
	0: '0',
	1: rem(1),
	2: rem(2),
	3: rem(3),
	4: rem(4),
	5: rem(5),
	6: rem(6),
	7: rem(7),
	8: rem(8),
	10: rem(10),
	12: rem(12),
	13: rem(13),
	14: rem(14),
	15: rem(15),
	16: rem(16),
	18: rem(18),
	20: rem(20),
	22: rem(22),
	24: rem(24),
	26: rem(26),
	28: rem(28),
	30: rem(30),
	32: rem(32),
	36: rem(36),
	46: rem(46),
	60: rem(60),
	82: rem(82),

};

const marginSpacing = {
	'1/2': '50%',
	'1/4': '25%',
	'66vw': '66vw',
}

module.exports = {

	colors,

	screens: {
		sm: '576px',
		md: '768px',
		lg: '1200px',
		xl: '1600px',
	},


	fonts: {
		sans: [
			'system-ui',
			'BlinkMacSystemFont',
			'-apple-system',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
			'sans-serif',
		],
	},

	textSizes: {
		12: '.75rem',
		14: '.875rem',
		15: '.9375rem',
		16: '1rem',
		18: '1.125rem',
		20: '1.25rem',
		21: '1.3125rem',
		24: '1.5rem',
		26: '1.625rem',
		28: '1.75rem',
		30: '1.875rem',
		36: '2.25rem',
		44: '2.75rem',
		46: '2.875rem',
		48: '3rem',
		60: '3.75rem',
		82: '5.125rem',
	},


	fontWeights: {
		light: 300,
		// normal: 400,
		normal: 500,
		bold: 700,
		black: 900,
	},


	leading: {
		none: 1,
		tight: 1.15,
		body: 1.125,
		normal: 1.35,
		loose: 2,
	},


	tracking: {
		tight: '-0.025em',
		normal: '0',
		body: '0.015em',
		wide: '0.05em',
	},


	textColors: colors,


	backgroundColors: colors,


	backgroundSize: {
		auto: 'auto',
		cover: 'cover',
		contain: 'contain',
	},


	borderWidths: {
		default: '1px',
		0: '0',
		2: '2px',
		4: '4px',
		8: '8px',
	},

	borderColors: global.Object.assign({ default: colors['black'] }, colors),


	borderRadius: {
		none: '0',
		sm: '.125rem',
		default: '.25rem',
		lg: '.5rem',
		full: '9999px',
	},


	width: {
		auto: 'auto',
		px: '1px',
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		12: '3rem',
		14: '3.5rem',
		15: '3.75rem',
		16: '4rem',
		24: '6rem',
		30: '7.5rem',
		32: '8rem',
		36: '9rem',
		48: '12rem',
		64: '16rem',
		76: '19rem',
		'1/2': '50%',
		'1/3': '33.33333%',
		'2/3': '66.66667%',
		'1/4': '25%',
		'3/4': '75%',
		'1/5': '20%',
		'2/5': '40%',
		'3/5': '60%',
		'4/5': '80%',
		'1/6': '16.66667%',
		'5/6': '83.33333%',
		xs: '28.5rem',
		sm: '32.3125rem',
		md: '40rem',
		lg: '50rem',
		xl: '60rem',
		'2xl': '70rem',
		'3xl': '80rem', // 1280,
		'4xl': '90rem', // 1440
		'5xl': '100rem', // 1600px
		full: '100%',
		screen: '100vw'
	},


	height: {
		auto: 'auto',
		px: '1px',
		1: '0.25rem',
		2: '0.5rem',
		3: '0.75rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		12: '3rem',
		14: '3.5rem',
		15: '3.75rem',
		16: '4rem',
		24: '6rem',
		30: '7.5rem',
		32: '8rem',
		48: '12rem',
		64: '16rem',
		'3x2vw': '66vw',
		'2x1vw': '50vw',
		'16x9vw': '56.25vw',
		full: '100%',
		screen: '100vh'
	},


	minWidth: {
		0: '0',
		full: '100%',
	},


	minHeight: {
		0: '0',
		carousel: '400px',
		halfBlock: '28.125vw',
		full: '100%',
		screen: '100vh'
	},


	maxWidth: {
		48: '12rem',
		64: '16rem',
		75: '18.75rem',
		100: '25rem',
		144: '36rem',
		xs: '28.5rem',
		sm: '32.3125rem',
		md: '40rem',
		lg: '50rem',
		xl: '60rem',
		'2xl': '70rem',
		'3xl': '80rem', // 1280,
		'4xl': '90rem', // 1440
		'5xl': '100rem', // 1600px
		full: '100%',
	},


	maxHeight: {
		full: '100%',
		screen: '100vh',
	},

	padding: spacing,
	margin: { auto: 'auto', ...spacing, ...marginSpacing },
	negativeMargin: { ...spacing, ...marginSpacing },


	shadows: {
		default: '0 2px 4px 0 rgba(0,0,0,0.10)',
		drop: '0 0 101px 0 rgba(0, 0, 0, 0.35)',
		md: '0 0 8px 0 rgba(0,0,0,0.12)',
		// md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
		lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		outline: '0 0 0 3px rgba(52,144,220,0.5)',
		none: 'none',
	},


	zIndex: {
		auto: 'auto',
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		10: 10,
		20: 20,
		30: 30,
		40: 40,
		50: 50,
		100: 100,
		101: 101,
		200: 200,
	},


	opacity: {
		0: '0',
		25: '.25',
		50: '.5',
		75: '.75',
		100: '1',
	},


	svgFill: {
		current: 'currentColor',
	},


	svgStroke: {
		current: 'currentColor',
	},

	aspectRatio: {
		'16x9': 16 / 9,
		'3x2': 3 / 2,
	},


	modules: {
		aspectRatio: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColors: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: [],
		borderColors: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidths: ['responsive'],
		cursor: ['responsive'],
		display: ['responsive'],
		flexbox: ['responsive'],
		float: ['responsive'],
		fonts: ['responsive'],
		fontWeights: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		leading: ['responsive'],
		lists: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		negativeMargin: ['responsive'],
		opacity: ['group-hover', 'hover', 'responsive'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		shadows: ['responsive', 'hover', 'focus'],
		svgFill: [],
		svgStroke: [],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColors: ['responsive', 'hover', 'focus'],
		textSizes: ['responsive'],
		textStyle: ['responsive', 'hover', 'focus'],
		tracking: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		zIndex: ['responsive'],
	},


	plugins: [
		require('tailwind-aspect-ratio'),
		function ({ addVariant }) {
			addVariant('focus-mouse', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `[data-whatintent='mouse'] .focus-mouse${separator}${className}:focus`;
				});
			});
			addVariant('focus-key', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `[data-whatintent='keyboard'] .focus-key${separator}${className}:focus`;
				});
			});
		}
	],


	options: {
		prefix: '',
		important: false,
		separator: ':',
	},

};
