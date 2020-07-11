<template>
  <div id="app">
    <Footer/>
      </div>
</template>

<script>
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
  margin: 0

#app
  display: flex
  flex-direction: column

a
  text-decoration: none
  color: inherit
  
a:hover
  text-decoration: underline

</style>
