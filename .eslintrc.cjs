module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  plugins: [
    'prettier',
    'import',
    'unused-imports'
  ],
  env: {},
  globals: {},
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': ['error', {
      groups: [
        'type',
        'builtin',
        'external',
        'internal',
        ['sibling', 'parent'],
        'index',
        'object',
      ]
    }]
  },
};