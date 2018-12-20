const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'vue-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue-nuxt-demo' }
    ],
    script: [
      { src: 'js/test.js' },
      { src: 'http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/common.scss'
    // 'element-ui/lib/theme-chalk/index.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: '@/plugins/vuex-persist',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    middleware: 'syncStore'
  },

  /*
   ** Build configuration
   */
  build: {
    // 分析并可视化构建后的打包文件
    analyze: {
      analyzerMode: 'static',
      openAnalyzer: false
    },

    vendor: ['element-ui'],
    maxChunkSize: 300000,

    // 为 JS 和 Vue 文件设定自定义的 babel 配置
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    // CSS 提取到一个单独的 CSS 文件
    extractCSS: true,

    // publicPath: isDev ? '/_nuxt/' : './_nuxt/'
  },

  watch: ['~/pages/**', '~/assets/**'],

  generate: {
    routes: [],
    subFolders: false
  }
}
