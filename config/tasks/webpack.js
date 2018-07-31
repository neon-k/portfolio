const $ = require('../plugin');
const SYSTEM = require('../setup').SYSTEM;
const TASK = require('../setup').TASK;

const webpackConfig = require('../webpack.config');

/**
 * webpack.config
 */
$.gulp.task(TASK.JS, () => {
    return $.webpackStream(webpackConfig, $.webpack)
    .on('error', function handleError() {
        this.emit('end');
    })
    .pipe($.gulp.dest(SYSTEM.ENV_DIR)); 
});
