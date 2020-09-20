import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// js库
import "./assets/css/reset.css"
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 首页tab组件
import LyTab from 'ly-tab'
Vue.use(LyTab)
// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 仓库
import store from "./store"


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
