var gulp          = require('gulp');
const imagemin    = require('gulp-imagemin');
const pngquant    = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant

gulp.task('imagemin', () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('assets/imgMin'));
});