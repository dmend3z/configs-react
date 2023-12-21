module.exports = {
  extends: [
    '@dan28/eslint-config-react',
    '@dan28/eslint-config-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
