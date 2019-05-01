module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended'
  ],
  rules: {
    'scss/dollar-variable-colon-space-after': 'always',
    'string-quotes': 'single',
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null
  }
}
