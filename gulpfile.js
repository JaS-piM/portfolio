let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))

    .pipe(gulp.dest('./assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});

gulp.task('minify', function() {
    return gulp.src("./assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'))
});





