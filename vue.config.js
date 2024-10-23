const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,  // Disable source maps in production
  configureWebpack: {
    optimization: {
      minimize: true,  // Ensure that code is minified
    },
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/zzportfolio/'
      : '/'
})
