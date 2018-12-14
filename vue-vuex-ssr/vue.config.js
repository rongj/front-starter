const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

function resolve (dir) {
  return path.join(__dirname, dir)
}

var baseConfig = {
  chainWebpack: config => {
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
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

var config = !isDev ? Object.assign(baseConfig, prodConfig) : Object.assign(baseConfig, devConfig);

module.exports = config;