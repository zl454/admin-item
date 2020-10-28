const path = require('path')
module.exports = {
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        'components': path.resolve(__dirname, './src/components'),
        // 'common': path.resolve(__dirname, './src/common'),
        // 'api': path.resolve(__dirname, './src/api'),
        // 'router': path.resolve(__dirname, './src/router'),
        // 'views': path.resolve(__dirname, './src/views'),
        // 'data': path.resolve(__dirname, './src/data'),
        // 'public': path.resolve(__dirname, 'public')
      }
    }
  },
}
