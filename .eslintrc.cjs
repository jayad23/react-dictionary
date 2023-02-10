module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react', 
    '@typescript-eslint', 
    'prettier'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    semi: [
      'warn',
      'always'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-array-index-key': 'on',
    'no-unused-vars': 'on'
  }
};
