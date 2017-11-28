const autoprefix = require("gulp-autoprefixer");
const gulp = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");

gulp.task('pug', function() {
	return gulp.src('src/pug/pages/**/*.pug')
	.pipe(pug())
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
	return gulp.src('src/js/*.js')
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('pug+styl', ['pug', 'stylus'], function() {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl'], ['pug', 'stylus']);
})

gulp.task('deploy', function() {
	return surge({
		project: './dist',
		domain: 'sanskriti.surge.sh'
	})
})

gulp.task('deployWatch', ['pug', 'stylus', 'scripts', 'deploy'], function() {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts', 'deploy']);
})

gulp.task('default', ['pug', 'stylus', 'scripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts']);
})