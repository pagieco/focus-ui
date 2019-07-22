module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    // Allow newlines inside class attribute values.
    'string-no-newline': null,

    // Limit the number of universal selectors in a selector to avoid very slow selectors.
    'selector-max-universal': 1,

    // Disallow allow global element/type selectors in scoped modules.
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],

    // HACK: to compensate for https://github.com/shannonmoeller/stylelint-config-prettier/issues/4
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],

    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // Allow SCSS and CSS module keywords beginning with `@`
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
