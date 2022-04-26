module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖,
    'multiline-ternary': 'off',
    'space-before-function-paren': 'off',
    'dot-notation': 'off',
    'react/react-in-jsx-scope': 'off',
    'one-var': 'off',
    'no-trailing-spaces': 'off',
    'key-spacing': 'off',
    'no-unused-vars': 'warn',
    'quotes': 'warn',
    'quote-props': 'off',
    'semi':'warn',
    'indent': ['warn', 2, { VariableDeclarator: { var: 2, let: 2, const: 3 } }]
  }
}
