<template>
  <footer class="footer">
    <div class="footer-column example-col">
      <div class="footer-row" v-for="n in 4" :key="n">
        <span class="footer-row"><a href="#">Link {{ n }}</a></span><br/>
      </div>
    </div>
    <div class="footer-divider"/>
    <div class="footer-column example-col">
      <div class="footer-row" v-for="n in 4" :key="n">
        <span class="footer-row"><a href="#">Link {{ n + 4 }}</a></span><br/>
      </div>
    </div>
    <div class="footer-divider"/>
    <div class="footer-column">
      <span class="footer-row">created by:</span><br/>
      <span class="footer-row">Marcin Fudala</span><br/>
      <span class="footer-row">nerko937@gmail.com</span><br/>
      <span class="footer-row"><a href="https://github.com/nerko937">Github</a></span>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>

.footer
  +center
  flex-shrink: 0
  background-color: $color-background

.footer-row
  line-height: 1.8rem
  font-size: small
  color: $color-primary
  font-family: Times, "Times New Roman", serif

@media (max-width: $breakpoint-phone)

  .footer
    flex-direction: column

  .footer-column
    width: 60%
    padding-top: 0.5rem
    padding-bottom: 0.5rem

  .footer-divider
    height: 1px
    background-color: #616161
    width: 80%

@media (min-width: $breakpoint-phone)

  .footer
    height: 25%

  .footer-column
    width: 8rem
    margin: auto 4rem

  .footer-divider
    width: 1px
    background-color: #616161
    height: 80%

  .example-col
    text-align: center

</style>