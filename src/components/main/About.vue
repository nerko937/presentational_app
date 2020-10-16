<template>
  <div class="container">
    <img src="@/assets/about.jpg" class="container__image">
    <p class="container__text">
      All images came from <a href="https://pixabay.com/">pixabay.com</a>.
    </p>
    <p class="container__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet ante quis viverra tristique. Sed laoreet suscipit nulla. Vestibulum fringilla dolor ac turpis volutpat, sit amet faucibus nibh fermentum. Nulla id ante elementum, lobortis nisl hendrerit, elementum lectus. Praesent et facilisis dui. Sed tempor libero sit amet justo semper sollicitudin vitae vitae lacus. Maecenas consectetur feugiat ipsum, non facilisis nisi pharetra eget. Curabitur purus dolor, rutrum semper nunc eu, pharetra volutpat elit. Vivamus luctus congue vulputate.
    </p>
    <p class="container__text">
      Ut id massa at justo porttitor cursus. Donec odio urna, congue ut euismod eget, pellentesque in purus. Pellentesque lectus tortor, vestibulum sit amet est ut, pretium semper quam. Proin vel nisi eget massa faucibus elementum non at libero. Sed fermentum ligula odio. Fusce eget enim enim. Ut dapibus gravida elit, eget rhoncus nulla.
    </p>
    <transition name="slide" mode="out-in">
      <div
        :key="slideIndex"
        class="container__footer"
      >
        <img
          v-for="(src, i) in partnerGroups[slideIndex]"
          :src="src"
          :key="i"
          class="container__partner"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slideIndex: 0,
        partnerGroups: [
          [
            require('@/assets/partner1.png'),
            require('@/assets/partner2.png'),
            require('@/assets/partner3.png'),
            require('@/assets/partner4.png'),
          ],
          [
            require('@/assets/partner5.png'),
            require('@/assets/partner6.png'),
            require('@/assets/partner7.png'),
            require('@/assets/partner8.png'),
          ],
        ]
      }
    },
    mounted () {
      setInterval(() => {
        this.slideIndex < (this.partnerGroups.length - 1) ? this.slideIndex++ : this.slideIndex = 0
      }, 4000)
    },
  }
</script>

<style lang="sass" scoped>
.container
  overflow: hidden

  &__image
    +shadow-soft
    @media (max-width: $breakpoint-tablet)
      height: auto
      max-width: 95%
      display: block
      margin-left: auto
      margin-right: auto
      margin-bottom: 1.5rem

    @media (min-width: $breakpoint-tablet)
      float: right
      margin-left: 1rem
      
  &__text
    font-size: x-large
    text-align: justify

    &:first-of-type
      margin-top: 0

    @media (max-width: $breakpoint-phone)
      margin: 0 .5rem
  
  &__footer
    overflow: hidden
    margin-top: 5rem
    margin-bottom: 3rem
    display: grid
    @media (max-width: $breakpoint-laptop)
      grid-row-gap: 1.5rem

    @media (max-width: $breakpoint-laptop) and (min-width: $breakpoint-phone)
      grid-template-columns: auto auto
      grid-row-gap: 4rem
      
    @media (min-width: $breakpoint-laptop)
      grid-template-columns: auto auto auto auto
      grid-column-gap: 2rem

  &__partner
    margin: auto
    height: auto
    max-width: 100%

+transition-animations(slide, $translate-arg: 200px)
  
</style>