module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/essential'
  ],
  plugins: [
    'html'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'module',
//     ecmaVersion: 9
//   },
//   env: {
//     browser: true,
//     es6: true
//   },
//   extends: 'standard',
//   plugins: [
//     'html'
//   ],
//   'rules': {
//     'arrow-parens': 0,
//     'generator-star-spacing': 0,
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }
