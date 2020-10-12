<template>
  <agile autoplay :autoplaySpeed='6000' id="carousel">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="slide"
      :style="`background-image: url(${slide.url})`"
    >
      <div class="slide__title">
        <h2>{{ slide.title }}</h2>
      </div>
      <div class="slide__text">
        <p>{{ slide.text }}</p>
      </div>
    </div>

    <template slot="prevButton">
      <font-awesome-icon icon="chevron-left"/>
    </template>
    <template slot="nextButton">
      <font-awesome-icon icon="chevron-right"/>
    </template>
  </agile>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: 'Title1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan tempor orci sit amet pretium.',
          url: require('@/assets/slide1.jpg'),
        },
        {
          title: 'Title1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan tempor orci sit amet pretium.',
          url: require('@/assets/slide2.jpg'),
        },
        {
          title: 'Title1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan tempor orci sit amet pretium.',
          url: require('@/assets/slide3.jpg'),
        }
      ]
    }
  },
};
</script>

<style lang="sass" scoped>
#carousel
  margin: 1rem 2rem

.slide
  height: 35rem
  background-size: cover
  &__title
    margin-top: 3rem
    color: $color-primary
    text-align: center

  &__text
    color: $color-primary
    height: 70%
    display: flex
    justify-content: center
    align-items: flex-end
  
    @media (min-width: $breakpoint-phone)
      margin: 0 2rem
  
    @media (max-width: $breakpoint-phone)
      padding: 0 1rem

</style>