const $ = require('../plugin.js')
const SYSTEM = require('../setup').SYSTEM;
const TASK = require('../setup').TASK;

$.gulp.task(TASK.BROWSER, () => {
    return $.browserSync.init({
        server: {
            baseDir: SYSTEM.ENV_DIR
        }
    })
})

$.gulp.task(TASK.BS, () => {
    $.browserSync.reload()
})