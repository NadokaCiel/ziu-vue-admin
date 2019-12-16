module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'prefer-promise-reject-errors': 0,
    'linebreak-style': 0,
    'no-use-before-define': 0,
    // not require constant expressions in conditions
    'no-constant-condition': 0,
    // allow multiline strings
    'no-multi-str': 0,
    // enforce 4 space indent
    'indent': ["error", 2],
    // allow variable decalared separately in functions
    'one-var': 0,
    // allow either backticks, double or single quotes
    'quotes': 0,
    // enforce no sapce before function parent
    'space-before-function-paren': ['error', 'never'],
    // not require camlecase
    'camelcase': 0,
    // not require newline at the end of files
    'eol-last': 0,
    // disallow semi in line end
    'semi': ["error", "always"],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
