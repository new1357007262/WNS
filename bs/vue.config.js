module.exports = {
  baseUrl: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://203.195.219.213:8083/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
