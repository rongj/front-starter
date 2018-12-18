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
    port: 8089
  }
};

var prodConfig = {
  baseUrl: '',
  productionSourceMap: false,
};

var config = process.env.NODE_ENV === 'production' ? Object.assign(baseConfig, prodConfig) : Object.assign(baseConfig, devConfig);

module.exports = config;