<template>
  <div>
    <SearthNav />
    <!-- 分类 -->
    <div class="shop">
      <!--左边-->
      <div class="menu-wrapper" ref="menulistw">
        <ul>
          <!--current-->
          <li
            class="menu-item"
            v-for="(goods, index) in searchgoods"
            :key="index"
            :class="{ current: index === currentIndex }"
            @click="clickLeftItem(index)"
            ref="menulist"
          >
            <span>{{ goods.name }}</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li
            class="shops-li"
            v-for="(goods, index1) in searchgoods"
            :key="index1"
          >
            <div class="shops-title">
              <h4>{{ goods.name }}</h4>
              <a href>查看更多 ></a>
            </div>
            <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt />
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt />
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
    return {
      scrollY: 0, // 右侧列表滑动的Y轴坐标(实时更新)
      rightLiTops: [], // 所有分类的头部位置
      isShow: false,
    };
  },
  created() {},
  mounted() {
    this.$store.dispatch("reqSearchGoods");
  },
  methods: {
    // 1.1 初始化
    initscroll() {
      // 1.1左边
      this.leftScroll = new BetterScroll(this.$refs.menulistw, {
        click: true,
        tap: true,
 
      });
      // 1.2右边
      this.rightScroll = new BetterScroll(".shop-wrapper", {
        probeType: 3,
        click: true,
        tap: true,
        
      });
      // 1.3 监听右侧的滑动事件
      this.rightScroll.on("scroll", (pos) => {
        this.scrollY = Math.abs(pos.y);
        // console.log( this.scrollY )
      });
    },
    // 1.2 求出右边所有版块的头部位置
    _initRightLiTops() {
      // 1.2.1 临时数组
      const tempArr = [];
      // 1.2.2 定义变量记录高度
      let top = 0;
      tempArr.push(top);
      // 1.2.3 遍历li标签, 取出高度
      let allLis = this.$refs.shopsParent.getElementsByClassName("shops-li");
      Array.prototype.slice.call(allLis).forEach((li) => {
        top += li.clientHeight;
        tempArr.push(top);
      });
      // 1.2.4 更新数据
      this.rightLiTops = tempArr;

      console.log(this.rightLiTops);
    },
    // 1.3  点击切换
    clickLeftItem(index) {
      console.log(1);
      this.scrollY = this.rightLiTops[index];
      this.rightScroll.scrollTo(0, -this.scrollY, 300);
    },

    // 1.4 左侧联动
    _leftScroll(index) {
      let menuLists = this.$refs.menulist;
      // console.log(menuLists);
      let el = menuLists[index];
      // console.log(el);
      this.leftScroll.scrollToElement(el, 300, 0, -100);
    },
  },
  computed: {
    ...mapState(["searchgoods"]),
    //  1. 用于动态决定左侧哪个选项被选中
    currentIndex() {
      // 1.1 获取数据
      const { scrollY, rightLiTops } = this;
      // 1.2  取出索引
      return rightLiTops.findIndex((liTop, index) => {
        this._leftScroll(index);
        return scrollY >= liTop && scrollY < rightLiTops[index + 1];
      });
    },
  },
  watch: {
    searchgoods() {
      this.$nextTick(() => {
        // 初始化滚动
        // 1、求出右边所有头部位置
        this.initscroll();
        // 1.2 求出右边所有版块的头部位置
        this._initRightLiTops();
      });
    },
  },
  components: {
    SearthNav,
  },
};
/**
 * bug 记录
 * 1、当右边的最后数据不满一屏时，无法选中当前的current
 * 2、滚动完右边后，概率 需要双击在左侧才能对应的跳转
 * 原因：有时不触发click
 */
</script>
<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl';

.search {
  background: #F5F5F5;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shop {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    background-color: #e0e0e0;
    width: 80px;
    flex: 0 0 80px;

    .menu-item {
      width: 100%;
      height: 60px;
      background-color: #fafafa;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: lighter;
      color: #666666;
      position: relative;
    }

    .current {
      color: #e02e24;
    }

    .current::before {
      content: '';
      background-color: #e02e24;
      width: 4px;
      height: 30px;
      position: absolute;
      left: 0;
    }
  }

  .shop-wrapper {
    flex: 1;
    background-color: #fff;

    .shops-title {
      display: flex;
      flex-direction: row;
      padding: 0 10px;
      height: 44px;
      align-items: center;
      justify-content: space-between;
      color: #999;

      a {
        color: #999;
        text-decoration: none;
        font-weight: lighter;
      }
    }

    .shops-items {
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        width: 33.3%;
        height: 90px;
        justify-content: center;
        align-items: center;
        color: #666;
        font-weight: lighter;
        font-size: 14px;

        img {
          width: 60%;
          height: 60%;
          margin-bottom: 5px;
        }
      }
    }

    .phone-type {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom-1px(#ccc);

      li {
        width: 33.3%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;

        img {
          width: 70%;
        }
      }
    }
  }
}
</style>
