var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');

gulp.task('default', ['sass', 'jade', 'watch']);

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.sass')
		.pipe(sass({indentedSyntax: true}))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('jade', function() {
  	gulp.src('./src/jade/*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./dist/'));
});
		  

gulp.task('watch', function() {
    
});



gulp.task('coffee', function() {
	gulp.src('./src/coffee/*.coffee')
		.pipe(coffee())
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});