 <template>
  <div>
    <div class="container">
      <ul class="list">
        <li class="item">
          <img src="../../imgs/shop_list/shop_item.png" alt />
          <h4 class="list-item-title">【唐密】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥23.3</span>
            <span class="iten-count">已拼2323件</span>
            <span class="item-user">
              <img src="../../imgs/shop_list/user1.jpg" alt />
              <img src="../../imgs/shop_list/user2.jpg" alt />
            </span>
            <span class="item-buy">
              <button>去拼单></button>
            </span>
          </div>
        </li>
        <li class="item">
          <img src="../../imgs/shop_list/shop_item.png" alt />
          <h4 class="list-item-title">【唐密】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥23.3</span>
            <span class="iten-count">已拼2323件</span>
            <span class="item-user">
              <img src="../../imgs/shop_list/user1.jpg" alt />
              <img src="../../imgs/shop_list/user2.jpg" alt />
            </span>
            <span class="item-buy">
              <button>去拼单></button>
            </span>
          </div>
        </li>
        <li class="item">
          <img src="../../imgs/shop_list/shop_item.png" alt />
          <h4 class="list-item-title">【唐密】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥23.3</span>
            <span class="iten-count">已拼2323件</span>
            <span class="item-user">
              <img src="../../imgs/shop_list/user1.jpg" alt />
              <img src="../../imgs/shop_list/user2.jpg" alt />
            </span>
            <span class="item-buy">
              <button>去拼单></button>
            </span>
          </div>
        </li>
        <li class="item">
          <img src="../../imgs/shop_list/shop_item.png" alt />
          <h4 class="list-item-title">【唐密】整条刺绣民族风围巾女士秋冬季中年妈妈羊绒羊毛披肩保暖</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥23.3</span>
            <span class="iten-count">已拼2323件</span>
            <span class="item-user">
              <img src="../../imgs/shop_list/user1.jpg" alt />
              <img src="../../imgs/shop_list/user2.jpg" alt />
            </span>
            <span class="item-buy">
              <button>去拼单></button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
 <style scoped>
.list {
}
.list .item {
  width: 100%;
  margin-bottom: 10px;
}
.list .item:last-child {
  padding-bottom: 50px;
}
.list .item .list-item-title {
  overflow: hidden;
  margin: 0 10px;
}
.list .item img {
  display: block;
  width: 100%;
  height: 180px;
}
.list .item .list-item-bottom {
  display: flex;
  margin: 10px 10px;
  justify-content: space-between;
  align-items: center;
}
.list .item .list-item-bottom .item-price {
  font-size: 18px;
  color: red;
  
}
.list .item .list-item-bottom .iten-count {
flex: 1;
margin-left: 5px;
}
.list .item .list-item-bottom .item-user {
  display: flex;
}
.list .item .list-item-bottom .item-user img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.list .item .list-item-bottom .item-user img:first-child {
  margin-right: -5px;
  z-index: 9;
}
.list .item .list-item-bottom .item-buy button {
  background: red;
  border: none;
  border-radius: 5px;
  color: #fff;
}
</style>