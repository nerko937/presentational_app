<template>
  <div id="app">

    <footer id="footer">
      <div class="footer-column">
        <span class="footer-row">created by:</span><br/>
        <span class="footer-row">Marcin Fudala</span><br/>
        <span class="footer-row">nerko937@gmail.com</span><br/>
        <span class="footer-row"><a href="https://github.com/nerko937">Github</a></span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="sass">
html, body, #app, #footer-column
  height: 100%

body
  background-image: url('./assets/background.jpg')
  margin: 0

a
  text-decoration: none
  color: inherit
  
a:hover
  text-decoration: underline

#app
  display: flex
  width: 100%

footer
  align-self: flex-end
  display: flex
  justify-content: flex-end
  width: 100%
  height: 25%
  background-color: $background-color

.footer-column
  width: 15%
  margin: auto 6rem

.footer-row
  line-height: 1.8rem
  font-size: small
  color: $secondary-color
  
</style>
