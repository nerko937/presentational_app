module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/sass/_variables.sass"
          @import "@/sass/_mixins.sass"
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/presentational_app/'
    : '/'
}
  