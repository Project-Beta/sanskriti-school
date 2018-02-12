const autoprefix = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const gulp = require("gulp");
const minify = require("gulp-babel-minify");
const prettify = require("gulp-prettify");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");
const webserver = require("gulp-webserver");

gulp.task('webserver', function() {
	return gulp.src("dist")
	.pipe(webserver({
		livereload: true,
		open: true
	}))
})

gulp.task('pug', function() {
	return gulp.src('src/pug/pages/**/*.pug')
	.pipe(pug())
	.pipe(prettify())
	.pipe(gulp.dest('dist/'));
})

gulp.task('stylus', function() {
	return gulp.src('src/styl/pages/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefix({
		cascade: false
	}))
	.pipe(gulp.dest('dist/assets/css'));
})

gulp.task('scripts', function() {
	return gulp.src(['src/js/navigation.js', 'src/js/draggable.js'])
	.pipe(concat('scripts.js'))
	.pipe(minify())
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('indexScripts', function() {
	return gulp.src(['src/js/carousel.js', 'src/js/updates.js', 'src/js/map.js'])
	.pipe(concat('index.js'))
	.pipe(minify())
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('newsScripts', function () {
	return gulp.src('src/js/news-archives.js')
		.pipe(concat('news.js'))
		.pipe(minify())
		.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('deploy', function() {
	return surge({
		project: './dist',
		domain: 'sanskriti.surge.sh'
	})
})

gulp.task('default', ['webserver', 'pug', 'stylus', 'scripts', 'indexScripts', 'newsScripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/*.js'], ['pug', 'stylus', 'scripts', 'indexScripts', 'newsScripts']);
})