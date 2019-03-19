var gulp = require('gulp'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename');


gulp.task('minify-js', function () {
    return gulp.src('src/disable-form-on-submit.js')
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('minify-js'));
