import pkg from './package'
import StylelintPlugin from 'stylelint-webpack-plugin'
import { createClient } from 'contentful'

require('dotenv').config()

// .envから環境変数を受け取る
const { SPACE_ID, ACCESS_TOKEN } = process.env

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

// デフォルトのtypeをセット
const type = {
  content_type: 'posts' // 投稿のtype
}

const getPosts = client.getEntries(type)

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/sw.scss', lang: 'scss' }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/lazy-load'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', ['nuxt-webfontloader']],

  // webfontを読み込む
  webfontloader: {
    google: {
      families: ['Work Sans', 'Noto Sans JP']
    }
  },

  // 全体で使うcssの変数
  styleResources: {
    scss: [
      '~/assets/styles/modules/variable.scss',
      '~/assets/styles/modules/mixin.scss',
      '~/node_modules/awesome-sass-easing/_sass-easing.scss'
    ]
  },

  // ビルド時に走らせる処理
  build: {
    extend (config, ctx) {
      // 開発のビルド
      if (ctx.isDev && ctx.isClient) {
        // eslint
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
            failOnWarning: true
          }
        })

        // styleLint
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss'],
            options: {
              fix: true
            }
          })
        )
      }
    }
  },
  generate: {
    routes () {
      return getPosts.then(entries => {
        return [
          ...entries.items.map(entry => `/post/${entry.fields.slug}`) // 個別ページを吐き出す
        ]
      })
    }
  },
  // 環境変数
  env: {
    SPACE_ID,
    ACCESS_TOKEN
  }
}
