<template>
  <footer class="footer">
    <div class="footer__column example-col">
      <div class="footer__row" v-for="n in 4" :key="n">
        <span class="footer__row"><a href="#">Link {{ n }}</a></span><br/>
      </div>
    </div>
    <div class="footer__divider"/>
    <div class="footer__column example-col">
      <div class="footer__row" v-for="n in 4" :key="n">
        <span class="footer__row"><a href="#">Link {{ n + 4 }}</a></span><br/>
      </div>
    </div>
    <div class="footer__divider"/>
    <div class="footer__column">
      <span class="footer__row">created by:</span><br/>
      <span class="footer__row">Marcin Fudala</span><br/>
      <span class="footer__row">nerko937@gmail.com</span><br/>
      <span class="footer__row"><a href="https://github.com/nerko937">Github</a></span>
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

  @media (max-width: $breakpoint-phone)
    flex-direction: column

  @media (min-width: $breakpoint-phone)
    height: 25%

  &__column
    @media (max-width: $breakpoint-phone)
      width: 60%
      padding-top: 0.5rem
      padding-bottom: 0.5rem

    @media (min-width: $breakpoint-phone)
      width: 8rem
      margin: auto 4rem

  &__row
    line-height: 1.8rem
    font-size: small
    color: $color-primary
    font-family: Times, "Times New Roman", serif
  
  &__divider
    @media (max-width: $breakpoint-phone)
      height: 1px
      background-color: #616161
      width: 80%

    @media (min-width: $breakpoint-phone)
      width: 1px
      background-color: #616161
      height: 80%

.example-col
  @media (min-width: $breakpoint-phone)
    text-align: center

</style>