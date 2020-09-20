// 仓库入口
import Vue from "vue"
import vuex from "vuex"

//仓库文件
import state from './state'
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

// 使用
Vue.use(vuex);
export default new vuex.Store({
    state,
    getters,
    mutations,
    actions
})