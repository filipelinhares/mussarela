var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var scsslint = require('gulp-scss-lint');
var sassdoc = require('sassdoc');

var config = {
  nodeDir: './node_modules'
}

gulp.task('lint', function() {
  gulp.src('./mussarela/**/*.scss')
    .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('sassdoc', function () {
  return gulp.src('./mussarela/**/*.scss')
    .pipe(sassdoc());
});
