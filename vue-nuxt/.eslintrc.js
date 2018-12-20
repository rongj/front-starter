module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
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
    }],

    // https://vuejs.github.io/eslint-plugin-vue/rules/
    "vue/html-self-closing": 0,
    "vue/attributes-order": 0,
    "vue/max-attributes-per-line": [2, {
      "singleline": 4,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}