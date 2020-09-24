<template>
  <div class="hot">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        class="swiper-lisde"
        v-for="(item, index) in homecasual"
        :key="index"
      >
        <img :src="item.imgurl" alt />
      </swiper-slide>

      <div
        class="swiper-pagination"
        style="position: absolute; left: 60%"
        slot="pagination"
      ></div>
    </swiper>
    <!-- 热点推荐下选项 -->
    <HotNav></HotNav>
    <!-- 广告位 -->
    <div class="hot-cd">
      <img src="../../imgs/hot_ad/home_ad.gif" alt />
    </div>
    <!-- 商品列表 -->
    <HotShopList></HotShopList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HotNav from "./HotNav.vue";
import HotShopList from "./HotShopList.vue";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
        loop: true,
        // Some Swiper option/callback...
      },
    };
  },
  watch: {
    homecasual() {
      this.$nextTick(() => {
        
      });
    }
  },
  mounted() {
    //首页轮播图请求
    this.$store.dispatch("reqHomeCasual");
    //首页数据列表
    this.$store.dispatch("getDatas");
  },
  computed: {
    ...mapState(["homecasual"]),
  },
  methods: {},
  components: {
    HotNav,
    HotShopList,
  },
};
</script>
 <style scoped>
.hot-cd {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
}
.hot-cd img {
  margin: 8px 0;
  background: #fff;
  padding: 5px 0;
  width: 100%;
  height: 100%;
}
</style>
<style  scoped  lang="stylus">
.hot /deep/ .swiper-pagination
  position absolute
  right 0 !important
.swiper-container-horizontal /deep/ .swiper-pagination-bullets
  width 3rem !important
.swiper-pagination /deep/ .swiper-pagination-bullet-active
  background red !important
.swiper-lisde img
  width 100%
  height 150px !important
.hot /deep/ .swiper-lisde
  width 100%
  height 150px
.hot
  padding-top 46px
</style>
