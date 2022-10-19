// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [ 
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // required to lint *.vue files
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
  },
};
