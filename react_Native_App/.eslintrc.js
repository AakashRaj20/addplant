module.exports = {
  root: true,
  extends: '@react-native',

  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      // <== Add This
      configFile: './babel.config.js', // <== Add This
    }, // <== Add This
  },
  // … other ESLint configurations
};
