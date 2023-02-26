// build: Cambios que afectan el sistema de compilación o dependencias externas.
// ci: Cambios en nuestros archivos y scripts de configuración de CI (ámbitos de ejemplo: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentación solo cambios
// feat: Una nueva característica
// fix: una corrección de errores
// perf: un cambio de código que mejora el rendimiento
// refactor: un cambio de código que no corrige un error ni agrega una característica
// style: Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y coma faltantes, etc.)
// test: Adición de pruebas faltantes o corrección de pruebas existentes

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
