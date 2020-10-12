<template>
  <div id="app">
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Main from '@/components/main/Main.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Main, Footer
  }
}
</script>

<style lang="sass">
html, body, #app
  height: 100%

body
  background-image: url('./assets/background.jpg')
  background-size: initial
  margin: 0

#app
  display: flex
  flex-direction: column
  font-family: Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif

a
  text-decoration: none
  color: inherit
  
a:hover
  text-decoration: underline

</style>
