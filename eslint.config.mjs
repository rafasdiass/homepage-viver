import { Linter } from 'eslint';
import * as pkg from '@eslint/js';

const recommendedConfig = pkg.recommended;

export const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    ...recommendedConfig,
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  rules: {
    // Adicione suas regras personalizadas aqui
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
};

export const linters = [Linter.create(config)];
