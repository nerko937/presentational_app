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
    }
  }
  