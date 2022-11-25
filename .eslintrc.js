require('@rushstack/eslint-patch/modern-module-resolution')
/* eslint-env node */
/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
