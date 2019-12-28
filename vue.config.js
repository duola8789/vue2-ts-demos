const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        lintDirtyModulesOnly: true,
      })
    ]
  }
};
