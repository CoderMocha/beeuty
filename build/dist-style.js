const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('style', async function() {
  return gulp.src('../src/style/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(minifyCSS())
    .pipe(rename('beeuty.css'))
    .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', gulp.series('style'));
