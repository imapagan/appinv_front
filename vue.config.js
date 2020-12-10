module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/appinv_front/'
      : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}