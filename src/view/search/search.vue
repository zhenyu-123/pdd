<template>
  <div>
    <SearthNav />
    <!-- 分类 -->
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li
            class="menu-item"
            v-for="(goods, index) in searchgoods"
            :key="index"
          >
            <span>{{ goods.name }}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul>
          <li
            class="shops-li"
            v-for="(goods, index1) in searchgoods"
            :key="index1"
          >
            <div class="shops-title">
              <h4>{{ goods.name }}</h4>
              <a href="">查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="" />
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="" />
                <span>{{ item.title }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearthNav from "./children/SearthcNav";
import BetterScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.$store.dispatch("reqSearchGoods");
  },
  methods: {
    initscroll() {
      // 左边
      new BetterScroll(".menu-wrapper", {
        scrollY: true,
        click: true,
      });
      // 右边
      new BetterScroll(".shop-wrapper", {
        scrollY: true,
        click: true,
      });
    },
  },
  computed: {
    ...mapState(["searchgoods"]),
  },
  watch: {
    searchgoods() {
      this.$nextTick(() => {
        // 初始化滚动
        this.initscroll();
      });
      // 1、求出右边所有头部位置
    },
  },
  components: {
    SearthNav,
  },
};
</script>
<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl'
.search
  background #F5F5F5
  width 100%
  height 100%
  overflow hidden
.shop
  display flex
  position absolute
  top 60px
  bottom 50px
  width 100%
  overflow hidden
  .menu-wrapper
    background-color #e0e0e0
    width 80px
    flex 0 0 80px
    .menu-item
      width 100%
      height 60px
      background-color #fafafa
      display flex
      justify-content center
      align-items center
      font-weight lighter
      color #666666
      position relative
    .current
      color #e02e24
    .current::before
      content ''
      background-color #e02e24
      width 4px
      height 30px
      position absolute
      left 0
  .shop-wrapper
    flex 1
    background-color #fff
    .shops-title
      display flex
      flex-direction row
      padding 0 10px
      height 44px
      align-items center
      justify-content space-between
      color #999
      a
        color #999
        text-decoration none
        font-weight lighter
    .shops-items
      display flex
      flex-wrap wrap
      li
        display flex
        flex-direction column
        width 33.3%
        height 90px
        justify-content center
        align-items center
        color #666
        font-weight lighter
        font-size 14px
        img
          width 60%
          height 60%
          margin-bottom 5px
    .phone-type
      width 100%
      display flex
      flex-direction row
      flex-wrap wrap
      border-bottom-1px(#ccc)
      li
        width 33.3%
        display flex
        justify-content center
        align-items center
        margin 5px 0
        img
          width 70%
</style>
