// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'old/**', 'node_modules/**', 'coverage/**', '.angular/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...angular.configs.tsRecommended],
    rules: {
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/prefer-signals': 'error',
      '@angular-eslint/prefer-inject': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
  },
  // ── Fronteras de arquitectura: core / shared / features ──────────────
  // shared/ es UI genérica sin lógica de negocio: no importa de core ni features.
  {
    files: ['src/app/shared/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/app/core/**', '@core/**'],
              message:
                'RULE: shared/ no puede importar de core/. Solo primitivas agnósticas al dominio (ver docs/architecture.md).',
            },
            {
              group: ['**/app/features/**', '@features/**'],
              message:
                'RULE: shared/ no puede importar de features/. Solo primitivas agnósticas al dominio (ver docs/architecture.md).',
            },
          ],
        },
      ],
    },
  },
  // core/ es infraestructura singleton: nunca importa de features/.
  {
    files: ['src/app/core/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/app/features/**', '@features/**'],
              message:
                'RULE: core/ no puede importar de features/. El estado global vive en core/state (ver docs/architecture.md).',
            },
          ],
        },
      ],
    },
  },
  // environments/ solo se importa en app.config.ts (vía API_BASE_URL).
  {
    files: ['src/**/*.ts'],
    ignores: ['src/app/app.config.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/environments/**', '@environments/**'],
              message:
                'RULE: environment solo se importa en app.config.ts. Los services usan API_BASE_URL / ApiClientService (ver docs/architecture.md).',
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
);
