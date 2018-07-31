const $ = require('../plugin.js')
const SYSTEM = require('../setup').SYSTEM;
const TASK = require('../setup').TASK;

/**
 * path
 */
const sass_src = $.path.join(SYSTEM.SRC,SYSTEM.SASS);
const index_src = $.path.join(SYSTEM.SRC,SYSTEM.SASS_INDEX);
const css_src = $.path.join(SYSTEM.SRC,SYSTEM.CSS);

/**
 * sass
 */
$.gulp.task(TASK.SASS, () => {
    sass_task([`./${sass_src}`,`!./${index_src}`],SYSTEM.ENV_DIR);
})

$.gulp.task(TASK.SASS_INDEX, () => {
    sass_task(`./${index_src}`,SYSTEM.ENV_DIR);
})
function sass_task(src, dist) {
    $.gulp.src(src)
        .pipe($.changed(dist))
        .pipe($.plumber({
            errorHandler: $.notify.onError("Error: <%= error.message %>")
        }))
        .pipe($.sass({
            outputStyle: (SYSTEM.ENV !== 'production') ? 'expanded' : 'compressed',
        }))
        .pipe(
            $.autoprefixer({
                browsers: SYSTEM.BROWSER,
                cascade: false
        }))
        .pipe($.rename({
            extname: '.css'
        }))
        .pipe($.gulp.dest(dist))
}

/**
 * css
 */

$.gulp.task(TASK.CSS, () => {
    css_task(`./${css_src}`,SYSTEM.ENV_DIR);
})
function css_task(src, dist) {
    $.gulp.src(src)
        .pipe($.gulp.dest(dist))
}