module.exports = {
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    ["import", { "libraryName": "../node_modules/ant-design-vue/es", "libraryDirectory": "", "style": "css" }] // `style: true` 会加载 less 文件
  ],
  presets: [
    '@vue/app'
  ]
}
