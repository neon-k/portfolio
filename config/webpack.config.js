const globAll = require('glob-all');
const $ = require('./plugin.js')
const SYSTEM = require('./setup').SYSTEM;

/**
 * entryするファイル取得
 */
const entries = { 'js/index.js': './src/index/js/index.js'}

globAll.sync(['./src/**/*.js','!./src/index/**/*.js']).map(function(file) {
    const fileValue = file.slice(6);
    entries[fileValue] = file;
})

console.log(entries);

/**
 * plugin
 */
const plugin = [
    new $.webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new $.UglifyJsPlugin({
        uglifyOptions: {
            output: {
                beautify: false,
                comments: $.saveLicense
            },
            compress: {
                drop_console: true
            },
            ie8: false,
            warnings: false
        }
    })
]

/**
 * webpack
 */
module.exports = {

    entry: entries,
    output: {
        filename: '[name]',
        jsonpFunction: 'ims'
    },
    devtool: (SYSTEM.ENV !== 'production') ? 'cheap-module-eval-source-map' : false,
    mode: (SYSTEM.ENV !== 'production') ? 'development' : 'production',
    plugins: plugin,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'eslint-loader',
                options: {
                    // 自動修正させる
                    fix: true,
                    // eslintでエラーだしたらビルドを中断する
                    failOnError: true,
                },
                options: {
                    "presets": [
                        ["env", {
                            targets: {
                                browsers: ['last 2 version', 'android >= 4.4', 'ios_saf >= 10', 'ie >= 10']
                            },
                            useBuiltIns: true
                        }]
                    ]
                }
            },
        ]
    }
};
