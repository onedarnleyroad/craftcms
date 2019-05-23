const gulp = require("gulp");
const watch = require("gulp-watch");
const imageMin = require("gulp-imagemin");
const svgSymbols = require("gulp-svg-symbols");
const svgmin = require("gulp-svgmin");
const clean = require('gulp-clean');
const { spawn } = require('child_process');
const path = require("path");

/*
 * ----------
 * SETTINGS
 * ----------
 */
const svg = {
	src: './src/svg/*.svg',
	dest: './templates/_readonly/svg'
};

const img = {
	src: [
		'./src/img/**/*.{jpg,gif,png,svg,ico}',
		svg.src
	],
	dest: './web/assets/img'
};

/*
 * ----------
 * SVG
 * ----------
 */
gulp.task('svg', () => gulp.src(svg.src)
	.pipe(svgmin(function getOptions(file) {
		const prefix = path.basename(file.relative, path.extname(file.relative));
		return {
			plugins: [{
				removeViewBox: false,
			}, {
				cleanupIDs: {
					prefix: `${prefix}-`,
					minify: true
				}
			}, {
				removeComments: true
			},
			{
				convertColors: {
					names2hex: false,
					rgb2hex: false
				}
			}]
		};
	}))
	.pipe(svgSymbols({
		title: '%f icon',
		id: 'svg-%f',
	}))
	.pipe(gulp.dest(svg.dest)));

/*
* ----------
* IMAGES
* ----------
*/
gulp.task('images', () => gulp.src(img.src)
	.pipe(imageMin([
		imageMin.svgo({
			plugins: [
				{ removeViewBox: false },
				{ cleanupIDs: false }
			]
		})
	]))
	.pipe(gulp.dest(img.dest)));

/*
 * ----------
 * CLEAN
 * ----------
 */
gulp.task('clean', () => gulp.src([
	`${svg.dest}/*.*`,
	`${img.dest}/*.*`,
], { read: false })
	.pipe(clean()));


/*
 * ----------
 * WEBPACK
 * ----------
 */
const runNpm = (key) => () => {
	return new Promise((resolve, reject) => {
		spawn('npm', ['run', key], { stdio: 'inherit' })
			.on('exit', function (data) {
				resolve("Webpack Finished");
			});
	});
};


gulp.task('webpack:production', runNpm('build:production'));
gulp.task('webpack:legacy', runNpm('build:legacy'));
gulp.task('dev-server', runNpm('serve'));
gulp.task('watch', () => {
	// NOTE - the exclusions....
	// If simply do **/*.html it'll create an infinite loop.
	// I.e. what this does is any HTML files _not_ in
	// the root of templates, will then 'touch' index.html 
	// and thus make webpack think there's an update.
	// but if you are watching 'index.html' as well, then 
	// touching index.html would trigger a touch on index.html
	// which would trigger a touch on index.html which would
	// trigger a....you get the idea.
	//
	// By trigging a change on index AND app.scss you cause
	// a full browser reload of the page, PLUS a recompile
	// of tailwind and purgecss, so when you get a new page,
	// any new classes should happily be added to the whitelist.
	watch([
		'./templates/**/*.twig',
		'!./templates/index.twig',
		'!./templates/_readonly/**/*.*',
	], { ignoreInitial: true }, function ( file ) {
		// spawn('touch', ['templates/index.twig']);
		spawn('touch', ['src/scss/app.scss']);
	});
});

gulp.task('serve', gulp.parallel('watch', 'dev-server'));

gulp.task('webpack', gulp.parallel(
	'webpack:production',
	'webpack:legacy',
));

/*
 * ----------
 * DEFAULT
 * ----------
 */
gulp.task('default', gulp.series('clean', gulp.parallel('images', 'svg', 'webpack')));
