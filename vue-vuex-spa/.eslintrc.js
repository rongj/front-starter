module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    // "off"或者0，不启用这个规则
    // "warn"或者1，出现问题会有警告
    // "error"或者2，出现问题会报错
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 0,
    "no-useless-rename": [2, {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
