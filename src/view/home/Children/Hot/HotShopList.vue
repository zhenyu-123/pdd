 <template>
  <div>
    <div class="container">
      <ul class="list">
        <li class="item" v-for="(item,index) in datalist" :key="index">
          <img :src="item.image" alt />
          <h4 class="list-item-title">{{item.title}}</h4>
          <div class="list-item-bottom">
            <span class="item-price">￥{{item.price}}</span>
            <span class="iten-count">已拼{{item.number}}件</span>
            <span class="item-user">
              <img :src="item.img1" alt />
              <img :src="item.img2" alt />
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
 import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['datalist'])
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