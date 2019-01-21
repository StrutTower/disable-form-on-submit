var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('minify-js', function () {
    return gulp.src('src/disable-form-on-submit.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('minify-js'));
