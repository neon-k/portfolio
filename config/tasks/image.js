const $ = require('../plugin')
const SYSTEM = require('../setup').SYSTEM;
const TASK = require('../setup').TASK;

const img_src = $.path.join(SYSTEM.SRC,SYSTEM.IMG);

$.gulp.task(TASK.IMG, () => {
    $.gulp.src(`./${img_src}`)
    .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.imagemin([
        $.imageminPNG({
            quality: '40-70',
            speed: 1
            }),
            $.imageminJPG({
                quality: 85,
                progressive: true
            }),
            $.imageminGIF({
                interlaced: false,
                optimizationLevel: 3,
                colors: 180
            }),
            $.imagemin.svgo(),
            $.imagemin.optipng(),
            $.imagemin.gifsicle()
        ]))
        .pipe($.gulp.dest(SYSTEM.ENV_DIR))
}); 