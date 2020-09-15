<template>
  <div class="home">
    <ly-tab class="fix" v-model="selectedId" :items="items" :options="options" @change="handleChange">
    </ly-tab>
    <!-- 展示二级路由 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" },
      ],
      options: {
        activeColor: "#e9232c",
      },
      routerUrl:[
        '/home/Hot',
        '/home/Dress',
        '/home/Box',
        '/home/Mbaby',
        '/home/General',
        '/home/Food',
        '/home/Shirt',
        '/home/Man',
        '/home/Ele',
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(item,index) {
      this.$router.replace(this.routerUrl[index])
    },
  },
};
</script>

<style scoped lang="stylus">
.home
  width 100%
  height 100%
  .fix
   position fixed
   top 0
   left 0
   z-index 998
</style>
