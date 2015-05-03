var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['jade', 'sass', 'image', 'js', 'serve']);

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.sass')
		.pipe(sass({indentedSyntax: true}))
		.pipe(gulp.dest('./build/css/'))
		.pipe(reload({stream: true}));
});

gulp.task('jade', function() {
  	gulp.src('./src/jade/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./build/'))
		.pipe(reload({stream: true}));
});

gulp.task('image', function () {
   gulp.src('.src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
   gulp.src('.src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('.build/js);
});

gulp.task('coffee', function() {
	gulp.src('./src/coffee/*.coffee')
		.pipe(coffee())
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js/'))
		.pipe(reload({stream: true}));
});

gulp.task('serve', function() {
    browserSync.init({
		server: {
            baseDir: "./build/"
        }
	});
	gulp.watch('./src/sass/**/*.sass', ['sass']);
	gulp.watch('./src/jade/**/*.jade', ['jade']);
    gulp.watch('./src/img/**/*', ['image']);
    gulp.watch('./src/js/**/*.js', ['js']);
});