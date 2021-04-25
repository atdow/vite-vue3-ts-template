/*
 * @Author: atdow
 * @Date: 2021-04-21 17:11:14
 * @LastEditors: null
 * @LastEditTime: 2021-04-25 13:38:49
 * @Description: file content
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended', // 添加 prettier 插件
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        // paths: ['src']
      }
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: '*' }]
  }
}
