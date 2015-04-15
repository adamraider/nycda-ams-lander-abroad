var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['styles']);

gulp.task('styles', function () {
    gulp.src('src/sass/**/*.sass')
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest('build/css/'));
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/sass/**/*.sass', ['styles']);
});

gulp.tast('jade', function(){
  	return gulp.src([]);
};