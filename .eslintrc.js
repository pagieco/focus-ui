module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    // Allow imports from the `devDependencies`.
    'import/no-extraneous-dependencies': 'off',

    // Disable forced default exporting.
    'import/prefer-default-export': 'off',

    // Disable named default imports.
    'import/no-named-default': 'off',

    // Set the max line length to 120.
    'max-len': ['error', {
      code: 120
    }],

    // Disable
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }],

    // Disable console.log warnings.
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
