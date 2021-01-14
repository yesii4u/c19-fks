module.exports = {
  plugins: ['eslint-plugin-tsdoc'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    // yesii
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ],
    'tsdoc/syntax': 'error'
  }
}
