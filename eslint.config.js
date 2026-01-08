import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        Shopify: 'readonly',
        Theme: 'readonly',
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'warn',
    },
  },
  {
   // Add any third part js code files from the theme that don’t pass the lint
    ignores: ['node_modules/', '.shopify/'],
  },
];
