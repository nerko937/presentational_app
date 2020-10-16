<template>
  <main>
    <div class="tabs">
      <div
        v-for="(item, i) in tabItems"
        :key="i"
        class="tabs__item"
        :class="{ 'tabs__item--selected': i === selected }"
        @click="selected = i"
      ><span>{{ item }}</span></div>
    </div>

    <div id="main-container">
      <div class="header">
        <img src="../../assets/logo.png" class="header__image"/>
      </div>
      <component
        v-for="(item, i) in tabItems"
        :key="i"
        :is="item"
        v-show="i === selected"
      />
    </div>
  </main>
</template>

<script>
  import Home from "./Home.vue"
  import About from "./About.vue"
  import Contact from "./Contact.vue"
  export default {
    components: {
      Home, About, Contact
    },
    data() {
      return {
        tabItems: ['Home', 'About', 'Contact', 'Products'],
        selected: 0
      }
    },
  }
</script>

<style lang="sass" scoped>
#main-container
  background-color: $color-background
  @media (min-width: $breakpoint-phone)
    padding: 2rem
  
  @media (max-width: $breakpoint-phone)
    padding: 2rem 0

main
  flex: 1 0 auto
  color: $color-secondary
  +shadow-soft
  
  @media (min-width: $breakpoint-tablet)
    margin: 5% 12%
  
  @media (min-width: $breakpoint-phone) and (max-width: $breakpoint-laptop)
    margin: 5%
  
  @media (max-width: $breakpoint-phone)
    margin-bottom: 5%

.tabs
  display: flex
  flex-direction: row
  
  &__item
    // variables
    $tabs-gap: 1px
    $tab-underline-height: 5px
    $animation-in-name: hover-in
    $animation-out-name: hover-out
    $selected-transition-timeout: 250ms
    $default-tab-color: #222222

    // styles
    +center
    color: $color-secondary
    background: $default-tab-color
    flex-grow: 1
    height: 3rem
    font-size: large
    font-weight: bold

    &:first-child
      margin-right: $tabs-gap

    &:last-child
      margin-left: $tabs-gap

    &:not(:first-child):not(:last-child)
      margin: 0px $tabs-gap

    &:hover:not(&--selected)
      cursor: pointer
    
    &--selected
      color: $color-primary !important
      background: $color-background !important // this important
      // disables keyframes o previously selected tab
      transition: all $selected-transition-timeout // triggers when selected class applies

    // tab underline styles
    margin-bottom: $tab-underline-height // prevents tab to go into subjacent container
    padding-top: $tab-underline-height // moves text into center
    position: relative

    // basic underline
    &:after, &:before
      content: ''
      display: block
      width: 100%
      height: $tab-underline-height
      bottom: -$tab-underline-height
      position: absolute

    &:before
      background-color: $default-tab-color
    
    &--selected:after
      background-color: $color-primary

    // underline animations
    &:not(&--selected)
      &:after
        transition-property: transform
        transition-duration: 225ms
        transition-timing-function: linear
        transform: scaleX(0)

      &:hover:after
        background-color: #616161
        transform: scaleX(1)
        transition-duration: 150ms
    
    &--selected:after
        transition: background-color $selected-transition-timeout
    
    // animated background on hover
    @each $keyframe-name in $animation-in-name, $animation-out-name
      @keyframes #{$keyframe-name}
        @for $i from 0 through 10
          #{$i * 10%}
            background: radial-gradient(circle at bottom, #2a2a2a $i * 10%, $default-tab-color $i * 10%)

    animation-name: $animation-out-name,
    animation-duration: 200ms
    animation-direction: reverse
    
    &:not(&--selected):hover
      animation-fill-mode: forwards
      animation-name: $animation-in-name,
      animation-direction: normal

.header
  width: 100%
  +center
  &__image
    margin-bottom: 0.5rem

</style>