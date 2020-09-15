<template>
  <div class="hot">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s1.png" alt />
      </swiper-slide>
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s2.png" alt />
      </swiper-slide>
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s3.png" alt />
      </swiper-slide>
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s4.png" alt />
      </swiper-slide>
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s5.png" alt />
      </swiper-slide>
      <swiper-slide class="swiper-lisde">
        <img src="../imgs/rowing/s6.png" alt />
      </swiper-slide>
      <div class="swiper-pagination" style="position:absolute;left:60%;" slot="pagination"></div>
    </swiper>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay: {
        //   delay: 500,
        //   disableOnInteraction: false, // 手动切换之后继续自动轮播
        // },
        loop: true,
        // Some Swiper option/callback...
      },
    };
  },

  created() {},
  mounted() {

  },
  methods: {},
};
</script>
 
<style  scoped  lang="stylus">
.hot  /deep/ .swiper-pagination{
  position absolute
  right:0 !important
}
.swiper-container-horizontal  /deep/ .swiper-pagination-bullets
  width 3rem !important

.swiper-pagination /deep/ .swiper-pagination-bullet-active
  background red !important

  
.swiper-lisde img
  height 150px !important
  height 150px !important
.hot /deep/ .swiper-lisde
  width 100%
  height 150px
.hot
  padding-top 46px
</style>
