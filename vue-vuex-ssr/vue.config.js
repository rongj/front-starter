const isDev = process.env.NODE_ENV !== 'production';
const isServer = process.env.WEBPACK_ENV === 'node';

const clientConfig = require('./vue.client.config');
const serverConfig = require('./vue.server.config');
const merge = require('webpack-merge');

var baseConfig = {
  configureWebpack: isServer ? serverConfig : clientConfig,
  // configureWebpack: () => ({
  //   optimization: {
  //     splitChunks: {
  //       chunks: "async",
  //       minSize: 30000,
  //       minChunks: 2,
  //       maxAsyncRequests: 5,
  //       maxInitialRequests: 3
  //     }
  //   },
  // }),
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        Object.assign(options, {
          optimizeSSR: false
        });
      });
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true,
      }
    }
  }
};


var devConfig = {
  baseUrl: '/',
  filenameHashing: false,
  devServer: {
    host: '0.0.0.0',
    port: 8092
  }
};

var prodConfig = {
  baseUrl: '',
  productionSourceMap: false,
};

var config = !isDev ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);

module.exports = config;