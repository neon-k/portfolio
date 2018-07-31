module.exports = {
    //system
    gulp: require('gulp'),
    changed: require('gulp-changed'),
    browserSync: require('browser-sync'),
    plumber: require('gulp-plumber'),
    rename: require('gulp-rename'),
    minimist: require('minimist'),
    browserslist: require('browserslist'),
    runSequence: require('run-sequence'),
    rimraf: require('rimraf'),
    notify: require('gulp-notify'),
    gulpIf: require('gulp-if'),
    path: require('path'),

    //html
    html: require('gulp-ejs'),
    minifyHTML: require('gulp-minify-html'),

    //sass & postcss
    sass: require('gulp-sass'),
    autoprefixer: require('gulp-autoprefixer'),
    cssmin: require('gulp-cssmin'),

    //js
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    UglifyJsPlugin: require('uglifyjs-webpack-plugin'),
    saveLicense: require('uglify-save-license'),

    //image
    imagemin: require('gulp-imagemin'),
    imageminJPG: require('imagemin-mozjpeg'),
    imageminPNG: require('imagemin-pngquant'),
    imageminGIF: require('imagemin-gifsicle'),
    svgmin: require('gulp-svgmin')

}