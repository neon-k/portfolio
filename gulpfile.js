const $ = require('./config/plugin.js');
const SYSTEM = require('./config/setup').SYSTEM;
const TASK = require('./config/setup').TASK;
const requireDir = require('require-dir');

requireDir('./config/tasks', {recurse: true});

/**
 * html
 */
const html_src = $.path.join(SYSTEM.SRC,SYSTEM.HTML);
const htmlIndex_src = $.path.join(SYSTEM.SRC,SYSTEM.HTML_INDEX);

/**
 * css
 */
const sass_src = $.path.join(SYSTEM.SRC,SYSTEM.SASS);
const sassIndex_src = $.path.join(SYSTEM.SRC,SYSTEM.SASS_INDEX);

/**
 * js
 */
const js_src = $.path.join(SYSTEM.SRC,SYSTEM.JS);

/**
 * watch
 */
$.gulp.task('default',[TASK.BROWSER], () => {
    $.gulp.watch(`./${htmlIndex_src}`,[TASK.HTML_INDEX,TASK.BS]);
    $.gulp.watch([`./${html_src}`,`!./${htmlIndex_src}`],[TASK.HTML,TASK.BS]);
    $.gulp.watch(`./${sassIndex_src}`,[TASK.SASS_INDEX,TASK.BS]);
    $.gulp.watch([`./${sass_src}`,`!./${sassIndex_src}`],[TASK.SASS,TASK.BS]);
    $.gulp.watch(`./${js_src}`,[TASK.JS,TASK.BS]);
})

/**
 * build
 */
$.gulp.task(TASK.BUILD, callback => {
    return $.runSequence(
        TASK.BUILDS,
        callback
    )
})