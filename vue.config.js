const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development' ? 'error' : false,
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      })
    ]
  },
  chainWebpack: config => {
    // 自动导入样式文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));

    // 配置 TypeScript 检查配置
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options
    config.plugin('fork-ts-checker').tap(option => {
      option[0].async = false;
      return option;
    })
  },
};

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less'),
        path.resolve(__dirname, './src/styles/mixins.less'),
      ],
    })
}
