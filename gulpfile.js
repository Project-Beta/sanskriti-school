// const cssbeautify = require("gulp-cssbeautify");
// const csslint = require("gulp-csslint");
// const htmllint = require("gulp-html");
// const jsbeautify = require("gulp-esformatter");
// const jslint = require("jslint");
// const uglify = require("gulp-uglify");
// const xtag = require("x-tag");
const babel = require("gulp-babel");
const gulp = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const nib = require("nib");

gulp.task('pug', function() {
	return gulp.src('src/pug/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist/html'));
})

gulp.task('stylus', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(stylus({
		use: [nib()],
		compress: true
	}))
	.pipe(gulp.dest('dist/css'));
})

gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
	.pipe(babel({
		presets: ['env'],
		minified: true
	}))
	.pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['pug', 'stylus', 'scripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts']);
})