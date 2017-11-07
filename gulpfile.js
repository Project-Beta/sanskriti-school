// const babel = require("gulp-babel");
// const cssbeautify = require("gulp-cssbeautify");
// const csslint = require("gulp-csslint");
const gulp = require("gulp");
// const htmllint = require("gulp-html");
// const jsbeautify = require("gulp-esformatter");
// const jslint = require("jslint");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
// const xtag = require("x-tag");
// const uglify = require("gulp-uglify");

//implement

gulp.task('pug', function() {
	return gulp.src('src/pug/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist/html'));
})

gulp.task('stylus', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(gulp.dest('dist/css'));
})

gulp.task('default', ['pug', 'stylus'])