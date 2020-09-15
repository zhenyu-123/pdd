import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// js库
import "./assets/css/reset.css"
import FastClick from 'fastclick'
FastClick.attach(document.body)
import LyTab from 'ly-tab'
Vue.use(LyTab)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
