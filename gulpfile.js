const autoprefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const gulp = require("gulp");
const prettify = require("gulp-prettify");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");
const uglify = require("gulp-uglify");

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
	return gulp.src('src/js/navigation.js')
	.pipe(concat('scripts.js'))
	.pipe(babel({
		presets: 'env'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('indexScripts', function() {
	return gulp.src(['src/js/carousel.js', 'src/js/updates.js', 'src/js/map.js'])
	.pipe(concat('index.js'))
	.pipe(babel())
	.pipe(uglify())
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('newsScripts', function () {
	return gulp.src('src/js/news-archives.js')
		.pipe(concat('news.js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('deploy', function() {
	return surge({
		project: './dist',
		domain: 'sanskriti.surge.sh'
	})
})

gulp.task('default', ['pug', 'stylus', 'scripts', 'indexScripts', 'newsScripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/*.js'], ['pug', 'stylus', 'scripts', 'indexScripts', 'newsScripts']);
})