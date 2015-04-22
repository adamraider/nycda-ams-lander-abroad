var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.sass')
		.pipe(sass({indentedSyntax: true}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('jade', function() {
  	gulp.src('./src/jade/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('coffee', function() {
	gulp.src('./src/coffee/*.coffee')
		.pipe(coffee())
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
		.pipe(browserSync.reload({stream:true}));
});


gulp.task('serve', function() {
	browserSync.init({
		server: {
            baseDir: "./dist/"
        }
	});
	
	gulp.watch('./src/sass/**/*.sass', ['sass']);
	gulp.watch('./src/jade/**/*.jade', ['jade']);
	gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
	
});