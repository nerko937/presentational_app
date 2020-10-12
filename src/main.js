import Vue from 'vue'
import App from './App.vue'

import VueAgile from 'vue-agile'
import "@/sass/carousel.sass"

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
