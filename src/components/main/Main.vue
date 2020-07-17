<template>
  <main>
    <div class="tabs">
      <div
        v-for="(item, i) in tabItems"
        :key="i"
        class="tabs__item"
        :class="isSelected(i)"
        @click="selected = i"
      ><span>{{ item }}</span></div>
    </div>

    <div id="temp"/>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        tabItems: ['Home', 'About', 'Contact', 'Products'],
        selected: 0
      }
    },
    methods: {
      isSelected(index) {
        return index === this.selected ? 'tabs__item--selected' : ''
      }
    },
  }
</script>

<style lang="sass" scoped>
#temp
  width: 100%
  height: 20rem
  background-color: $color-background

main
  flex: 1 0 auto
  margin: 10%

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
    font-family: Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif

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
      background: $color-background !important

    // animated underline
    margin-bottom: $tab-underline-height
    padding-top: $tab-underline-height
    position: relative

    &:after, &:before
      content: ''
      display: block
      width: 100%
      height: $tab-underline-height
      bottom: -$tab-underline-height
      position: absolute

    &:before
      background-color: $default-tab-color

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
    
    &--selected
      &:after
        background-color: $color-primary
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
    
    &:not(&--selected)
      &:hover
          cursor: pointer
          animation-fill-mode: forwards
          animation-name: $animation-in-name,
          animation-direction: normal
    
    &--selected
      background: $color-background !important

</style>