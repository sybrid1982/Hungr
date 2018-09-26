'use strict';
const gulp = require("gulp");
const useref = require("gulp-useref");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify-es").default;
const minifyCss = require("gulp-clean-css");

gulp.task("concat", () => {
    return gulp.src("*.html")
        .pipe(useref())
        .pipe(gulp.dest('dist/public'))
});

gulp.task("minify", ["concat"], () => {
    return gulp.src("dist/public/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/public/scripts/'))
});