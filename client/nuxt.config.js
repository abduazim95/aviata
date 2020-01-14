require('dotenv').config()
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

module.exports = {
  mode: 'spa',

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + '/api',
    appName: process.env.APP_NAME || 'AVIATA'
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aviata project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#007bff' },

  css: [
    { src: '~assets/sass/app.scss', lang: 'scss' }
  ],

  plugins: [
    '~components/global',
    '~plugins/vform',
    // '~plugins/fontawesome', #Уже подключено в vuetify
    '~plugins/vuetify',
    // { src: '~plugins/bootstrap', mode: 'client' }
  ],

  modules: [
    '@nuxtjs/router',
    'nuxt-svg-loader'
  ],

  build: {
    extractCSS: true
  },

  hooks: {
    build: {
      done (builder) {
        if (builder.nuxt.options.dev === false && builder.nuxt.options.mode === 'spa') {
          const publicDir = join(builder.nuxt.options.rootDir, 'public', '_nuxt')
          removeSync(publicDir)
          setTimeout(function () {
            copySync(join(builder.nuxt.options.generate.dir, '_nuxt'), publicDir)
            copySync(join(builder.nuxt.options.generate.dir, '200.html'), join(builder.nuxt.options.rootDir, 'public', 'index.html'))
          }, 1000)
        }
      }
    }
  }
}
