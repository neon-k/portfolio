const $ = require('../plugin.js')
const SYSTEM = require('../setup').SYSTEM;
const TASK = require('../setup').TASK;
const CONF = require('../setup').CONF;

const html_src = $.path.join(SYSTEM.SRC,SYSTEM.HTML);
const index_src = $.path.join(SYSTEM.SRC,SYSTEM.HTML_INDEX);

$.gulp.task(TASK.HTML, () => {
    html_task([`./${html_src}`,`!./${index_src}`],SYSTEM.ENV_DIR)
});

$.gulp.task(TASK.HTML_INDEX, () => {
    html_task(`./${index_src}`,SYSTEM.ENV_DIR)
})

function html_task(src,dist) {
    const env = (SYSTEM.ENV === 'production');
    
    $.gulp.src(src)
    .pipe($.changed(dist))
    .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.html({CONF}))
    .pipe($.gulpIf(env,$.minifyHTML({ empty: true })))
    .pipe($.rename({extname: '.html'}))
    .pipe($.gulp.dest(dist))
};