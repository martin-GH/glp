var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  sass: {
    in: './src/scss/**/*.scss',
    out: './public/css'
  },
  js: {
    in: './src/scripts/**/*.js',
    out: './public/js'
  }
}

gulp.task('sass', function() {
  return gulp.src(config.sass.in)
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest(config.sass.out));
});

gulp.task('scripts', function() {
  return gulp.src(config.js.in)
    .pipe(gulp.dest(config.js.out));
});

gulp.task('watch', function() {
  gulp.watch(config.sass.in, ['sass']);
  gulp.watch(config.js.in, ['scripts']);
});

gulp.task('default', ['scripts','sass','watch']);
