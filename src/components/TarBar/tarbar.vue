<template>
  <div class="box">
    <span class="item" @click="switchTab('/home')">
      <img :src="$route.path.includes('/home') ? list[0].selected:list[0].normal" alt />
      <span :class="{on:$route.path.includes('/home')}">首页</span>
    </span>
    <span class="item" @click="switchTab('/recommend')">
      <img :src="$route.path.includes('/recommend') ? list[1].selected:list[1].normal" alt />
      <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
    </span>
    <span class="item" @click="switchTab('/search')">
      <img :src="$route.path.includes('/search') ? list[2].selected:list[2].normal" alt />
      <span :class="{on:$route.path.includes('/search')}">搜索</span>
    </span>
    <span class="item" @click="switchTab('/chat')">
      <img :src="$route.path.includes('/chat') ? list[3].selected:list[3].normal" alt />
      <span :class="{on:$route.path.includes('/chat')}">聊天</span>
    </span>
    <span class="item" @click="switchTab('/me')">
      <img :src="$route.path.includes('/me') ? list[4].selected:list[4].normal" alt />
      <span :class="{on:$route.path.includes('/me')}">我的</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {normal:require("@/assets/img/icon_home.png"),selected:require("@/assets/img/icon_home_selected.png")},
            {normal:require("@/assets/img/icon_intro.png"),selected:require("@/assets/img/icon_intro_selected.png")},
            {normal:require("@/assets/img/icon_search.png"),selected:require("@/assets/img/icon_search_selected.png")},
            {normal:require("@/assets/img/icon_chat.png"),selected:require("@/assets/img/icon_chat_selected.png")},
            {normal:require("@/assets/img/icon_mine.png"),selected:require("@/assets/img/icon_mine_selected.png")},
        ]
    };
  },
  created() {},
  mounted() {},
  methods: {
      switchTab(path){
          // console.log(this.$route)
          
          this.$router.replace(path)
      }
  },
};
</script>

<style scoped lang="stylus">
.box
  width 100%
  height 50px
  background #ffffff
  position fixed
  bottom 0
  left 0
  display flex
  z-index 999
  .item
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-size 14px
    color #666
    img 
        width 35%
        margin-bottom  2px
    .on 
       color red
</style>
