require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  env: {
    'vue/setup-compiler-macros': true,
  },
}
