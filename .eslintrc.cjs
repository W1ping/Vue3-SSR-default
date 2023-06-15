require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    // 浏览器环境
    browser: true,
    // Node环境
    node: true,
    // 启用除了modules以外的所有 ECMAScript 6 特性
    es2021: true
  },
  root: true,
  extends: [
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'import'
  ],
  rules: {
    semi: ['warn', 'never'], // 禁止尾部使用分号
    'no-debugger': 'warn', // 禁止出现 debugger
    'vue/multi-word-component-names': 0, // 多字符组件名称，不设置检测
    'no-bitwise': 'off',
    'import/no-extraneous-dependencies': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 120],
    'no-new': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'eol-last': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'off',
    'arrow-parens': 'off',
    eqeqeq: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
    'vue/require-component-is': 'off',
    'prefer-template': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'import/named': 'off',
    'object-curly-newline': 'off',
    'default-case': 'off',
    'import/order': 'off',
    'no-trailing-spaces': 'warn',
    'func-names': 'off',
    radix: 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-await-in-loop': 'off',
    'import/no-unresolved': 'off',
    'no-case-declarations': 'off',
    'template-curly-spacing': 'off',
    'vue/valid-v-for': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'guard-for-in': 'off',
    '@typescript-eslint/ban-types': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 3,
        multiline: 1
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'no-multiple-empty-lines': [
      // 空行最多不能超过1行
      2,
      {
        max: 1
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
