<template>
  <div>
    <div class="card" v-for="item in items" :key="item.title">
      <div class="card__image">
        <img :src="item.url"/>
      </div>
      <div class="card__title">
        {{ item.title }}
      </div>
      <div class="card__text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            url: require('@/assets/item1.jpg'),
            title: 'Item1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel interdum ipsum. Mauris ac pretium metus. Fusce euismod, enim ac lobortis facilisis, justo ligula eleifend nisi, sollicitudin faucibus dolor nibh sit amet arcu. Nulla pulvinar felis eget aliquam mattis. Integer ac consequat arcu. Phasellus eget mi euismod, maximus sem sed, luctus orci. Integer ullamcorper ultrices nisi, ut hendrerit ipsum. Nulla ligula libero, egestas eu egestas in, feugiat nec ex.'
          },
          {
            url: require('@/assets/item2.jpg'),
            title: 'Item2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel interdum ipsum. Mauris ac pretium metus. Fusce euismod, enim ac lobortis facilisis, justo ligula eleifend nisi, sollicitudin faucibus dolor nibh sit amet arcu. Nulla pulvinar felis eget aliquam mattis. Integer ac consequat arcu. Phasellus eget mi euismod, maximus sem sed, luctus orci. Integer ullamcorper ultrices nisi, ut hendrerit ipsum. Nulla ligula libero, egestas eu egestas in, feugiat nec ex.'
          },
          {
            url: require('@/assets/item3.jpg'),
            title: 'Item3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel interdum ipsum. Mauris ac pretium metus. Fusce euismod, enim ac lobortis facilisis, justo ligula eleifend nisi, sollicitudin faucibus dolor nibh sit amet arcu. Nulla pulvinar felis eget aliquam mattis. Integer ac consequat arcu. Phasellus eget mi euismod, maximus sem sed, luctus orci. Integer ullamcorper ultrices nisi, ut hendrerit ipsum. Nulla ligula libero, egestas eu egestas in, feugiat nec ex.'
          },
        ]
      }
    },
  }
</script>

<style lang="sass" scoped>
.card
  background-color: $color-background-secondary
  padding: 1rem
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.75)
  -moz-box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.75)
  box-shadow: 0px 0px 11px -1px rgba(0,0,0,0.75)
  @media (max-width: $breakpoint-tablet)
    margin: 1rem

  @media (min-width: $breakpoint-tablet)
    margin: 1rem 0
    display: grid
    grid-template-columns: 4fr 6fr
    grid-template-rows: 2rem auto
    grid-column-gap: 2rem

  &__image
    +center
    @media (min-width: $breakpoint-tablet)
      grid-row: 1 / 3

    & img, div
      height: auto
      max-width: 100%
      margin: auto
      +shadow-soft

  &__title
    font-weight: bold
    font-size: x-large
    @media (max-width: $breakpoint-tablet)
      margin: 1rem 0
  
  &__text
    @media (max-width: $breakpoint-tablet)
      text-align: justify
</style>