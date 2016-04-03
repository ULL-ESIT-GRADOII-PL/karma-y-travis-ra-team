var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');

/*
  Creates the minified version of all files (html, js, css) of the project.
  The result files are stored inside 'minified' folder.
*/
var DEST = 'minified';
gulp.task('minify', function() {
  return gulp.src(['*.html', 'assets/js/*.js', 'assets/css/*.css'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(DEST));
});

gulp.task('clean', function(cb) {
  del([
    'minified/*',
  ], cb);
});
