// Imports:
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Functions: 
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá, Gulp! :)");
    callback();
}

// gulp.parallel
const build = gulp.parallel(compilaSass, comprimeJavaScript, comprimeImagens);

// gulp-watch
function watch() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, compilaSass);
}

// Exports:
exports.default = gulp.series(funcaoPadrao, dizOi, build);
exports.olar = dizOi;
exports.sass = compilaSass;
exports.watch = watch;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
