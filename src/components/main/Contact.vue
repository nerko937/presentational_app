<template>
  <div class="container">
    <img class="container__map" src="@/assets/map.png" alt="map"/>
    <table class='container__table'>
      <colgroup>
        <col span="1" style="width: 55%;">
      </colgroup>
      <tr v-for="(value, name) in contactData" :key="name" class="container__col">
        <td>{{ name }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contactData: {
          'Street': '1156  Pine Garden Lane',
          'City': 'Norcross',
          'State': 'GA',
          'State Full': 'Georgia',
          'Zip Code': 30071,
          'Phone Number': '770-688-8891',
          'Email': 'example@mail.com'
        }
      }
    },
  }
</script>

<style lang="sass" scoped>
.container
  display: flex
  @media (max-width: $breakpoint-desktop)
    flex-wrap: wrap
  
  @media (min-width: $breakpoint-desktop)
    margin: 1rem
    flex-direction: row

  &__map
    height: auto
    max-width: 95%
    margin: auto
    @media (min-width: $breakpoint-desktop)
      parring-right: 2rem

  &__table
    padding: 0 1rem
    font-size: x-large
    max-width: 450px
    width: 100%
    margin: 0 auto
    @media (max-width: $breakpoint-phone)
      parring-left: 2rem
      font-size: medium
    @media (min-width: $breakpoint-desktop)
      parring-left: 2rem

    @media (max-width: $breakpoint-desktop)
      margin-top: 2.5rem
      
    & td
      padding-bottom: 1.2rem
      white-space: nowrap
    
</style>