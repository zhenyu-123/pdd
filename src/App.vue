<template>
  <div id="app">
     <router-view></router-view>
     <TarBar></TarBar>
  </div>
</template>

<script>
 
import TarBar from "@/components/TarBar/tarbar"
export default {
  name: 'App',
  components: {
 TarBar
  }
}
</script>

<style  scoped lang="stylus">
// @import url("./assets/css/reset.css");
#app
  font-family: sans-serif;
  width:100%;
  height:100%;
  background #f5f5f5

</style>
