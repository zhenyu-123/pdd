<template>
  <div class="box">
    <div class="content">
      <div class="content-scroll">
        <a href class="item">
          <img src="../../imgs/nav/nav_icon01.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon02.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon03.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon04.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon05.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon06.gif" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon07.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon08.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon09.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon10.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon11.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon12.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon13.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon14.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon15.png" alt />
          <span>限时秒杀</span>
        </a>
        <a href class="item">
          <img src="../../imgs/nav/nav_icon16.png" alt />
          <span>限时秒杀</span>
        </a>
      </div>
    </div>

    <!--进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 1. 屏幕的宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      // 2. 滚动内容的宽度
      scrollContentW: 720,
      // 3. 滚动条背景的长度
      bgBarW: 100,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0,
    };
  },
   computed:{
      innerBarStyle(){
        return {
          width: `${this.barXWidth}px`,
          left: `${this.barMoveWidth}px`
        }
      }
    },
  created() {},
   mounted() {
       this.getBottomBarWidth();
       this.bindEvent();
    },
    methods:{
      // 获取滚动条的长度
      getBottomBarWidth(){
        this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW)
       
      },
      // 移动端事件监听
      bindEvent(){
         this.$el.addEventListener('touchstart',this.handleTouchStart,false);
         this.$el.addEventListener('touchmove',this.handleTouchMove,false);
         this.$el.addEventListener('touchend',this.handleTouchEnd,false);
      },
      // 开始触摸
      handleTouchStart(event){
         // console.log(event.touches);
         // 1. 获取第一个触点
        let touch = event.touches[0];
         // 2.求出起始点
        this.startX = Number(touch.pageX);
        // console.log(this.startX);
      },
      // 开始移动
      handleTouchMove(event){
        // 1. 获取第一个触点
        let touch = event.touches[0];
        // 2. 求出移动的距离
        let moveWidth = Number(touch.pageX) - this.startX;
        // console.log(moveWidth);
        // 3. 求出滚动条走的距离
        this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);
        // 4. 边界值处理
        if(this.barMoveWidth <= 0){ // 左边
          this.barMoveWidth = 0;
        }else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
          this.barMoveWidth = this.bgBarW - this.barXWidth;
        }
      },
      // 结束触摸
      handleTouchEnd(){
        // console.log('结束触摸');
        this.endFlag = this.barMoveWidth;
      },
    }
};
</script>
<style scoped lang="stylus">
//去掉横向滚动条
.content::-webkit-scrollbar
      display none
    .hot-nav-bottom
      width 100px
      height 2px
      background-color #ccc
      position absolute
      left 50%
      margin-left -50px
      bottom 8px
      .hot-nav-bottom-inner
         position absolute
         left 0
         height 100%
         background-color orangered
         width 0
</style>
<style scoped>
.box {
  width: 100%;
  height: 180px;
  position: relative;
  background: #fff;
  padding-bottom: 0.2rem;
}

.box .content {
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
.box .content .content-scroll {
  width: 14.4rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.box .content .content-scroll .item {
    /* 一屏幕放8个，一个宽90px ，一屏幕宽360px，两屏幕720px */
  width: 90px;
  height: 90px;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box .content .content-scroll .item img {
  width: 40%;
  margin-bottom:5px;
}
.box .content .content-scroll .item span {
  font-size: 11px;
  color: #666;
}
</style>
