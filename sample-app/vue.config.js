module.exports = {
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify"
  ]
}
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/prepends.scss";'
      }
    }
  }
};