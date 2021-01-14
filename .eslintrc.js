module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/prefer-es6-class': [1, 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    quotes: [2, 'single'],
    'import/extensions': 0,
    'max-len': ['error', { code: 90 }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0
  }
};
