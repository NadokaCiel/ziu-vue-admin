
module.exports = {
  chainWebpack: config => {
  },
  css: {
    loaderOptions: {
    },
  },
  assetsDir: 'static',
  indexPath: 'main.html',
  pages: {
    main: {
      entry: 'src/main.js',
        // 模板来源
        template: 'public/main.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
    }
  },
  devServer: {
    https: false,
    host: 'localhost',
    port: '8080',
  },
  publicPath: '/', // 不同项目，可以修改为不同的path路径
};