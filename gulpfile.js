//dependencies
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const htmlmin = require("gulp-htmlmin");

//SCSS compiling & watch
const styleSRC = "./src/styles/style.scss";
const styleDIST = "./dist/css/";
const styleWatch = "./src/styles/**/*.scss";

//HTML compiling & watch
const htmlMinifySRC = "./index.html";
const htmlMinifyDIST = "./dist/html/";
const htmlMinifyWatch = "./index.html";

gulp.task("cssMinify", function(done) {
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                errorLogConsole: true,
                outputStyle: "compressed"
            })
        )
        .on("error", console.error.bind(console))
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(styleDIST));
    done();
});

gulp.task("css", function(done) {
    gulp.src(styleSRC)
        .pipe(
            sass({
                errorLogConsole: true
            })
        )
        .on("error", console.error.bind(console))
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(gulp.dest(styleDIST));
    done();
});

gulp.task("htmlMinify", function(done) {
    gulp.src(htmlMinifySRC)
        .pipe(
            htmlmin({
                collapseWhitespace: true
            })
        )
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(gulp.dest(htmlMinifyDIST));
    done();
});

gulp.task("default", function() {
    gulp.watch(styleWatch, gulp.series("cssMinify"));
    gulp.watch(styleWatch, gulp.series("css"));
    gulp.watch(htmlMinifyWatch, gulp.series("htmlMinify"));
});
