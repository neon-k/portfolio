const $ = require('./plugin.js')

const knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'local' }
}
const options = $.minimist(process.argv.slice(2), knownOptions);

const env = `./${options.env}`;

module.exports = {
    SYSTEM: {
        //BROWSER
        BROWSER: 'last 2 version, android >= 4.1, ios_saf >= 8, ie >= 8, edge >= 12',

        //DIRECTORY
        SRC: './src',
        LOCAL: './local',

        //BUILD SRC
        HTML: '**/*.ejs',
        JS: '**/*.js',
        SASS: '**/*.scss',
        CSS: '**/*.css',
        IMG: '**/*.+(jpg|jpeg|png|gif|svg)',

        //BUILD INDEX SRC
        HTML_INDEX: 'index/**/*.ejs',
        SASS_INDEX: 'index/**/*.scss',

        //ENV
        ENV: options.env,
        ENV_DIR: env,
    },
    //TASC
    TASK: {
        //TASK NAME
        JS: 'js',
        CSS: 'css',
        SASS: 'sass',
        HTML: 'html',
        BROWSER: 'browser',
        BS: 'bs',
        BUILD: 'build',
        IMG: 'img',

        //INDEX TASK NAME
        HTML_INDEX: 'html_index',
        SASS_INDEX: 'sass_index',

        //BUILD
        BUILDS: [
            'js',
            'css',
            'sass',
            'html',
            'img',
            'html_index',
            'sass_index',
        ]
    },
    //CONF
    CONF: {
        ROUT: '../'
    }
}
