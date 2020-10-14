<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <TarBar></TarBar>
  </div>
</template>

<script>
import TarBar from "@/components/TarBar/tarbar";
export default {
  data(){
    return{
      transitionName:""
    }
  },
  name: "App",
  components: {
    TarBar,
  },
  watch:{
    $route(to,from){
      // console.log(to,77);
      // console.log(from,88);
      const fromIndex=from.meta.index
      const toIndex=to.meta.index
      if (toIndex > fromIndex) {
        this.transitionName = 'slide-right'
      } else if (toIndex < fromIndex) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = ''
      }
    }
  }
};
</script>

<style>
@import url("./assets/css/common.css");
</style>
<style  scoped lang="stylus">
// @import url("./assets/css/reset.css");
#app
  font-family sans-serif
  width 100%
  height 100%
  background #f5f5f5
</style>
