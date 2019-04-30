import pkg from "./package";
import StylelintPlugin from 'stylelint-webpack-plugin';

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/styles/sw.scss', lang: 'scss' },
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: [
      '~/assets/styles/variable.scss',
      ]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // eslint
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
            failOnWarning: true
          }
        });

        // styleLint
        config.plugins.push(new StylelintPlugin({
          files: [
            '**/*.vue',
            '**/*.scss',
          ],
          options: {
            fix: true
          }
        }));
      }
    }
  },
  // 環境変数
  env: {
    SPACE_ID: "9orv7sxolfmo",
    ACCESS_TOKEN:
      "97c4e5a69f88dccf0bb45e2ab1ad148f69ba9057997c0545f731153ee9fd1b2b"
  }
};
