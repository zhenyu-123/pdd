import {
    HOME_CASUAL,
    REC_LIST,
    HOME_SHOP_LIST
} from './mutation-types'
export default {
    //['home_casual'],为了将公共的变量转为字符串,从而使用常量替代mutation事件类型
    //首页轮播图
    [HOME_CASUAL](state, {
        home_casual
    }, callback) {
        state.homecasual = home_casual;
        callback && callback()
    },
      //推荐页数据列表
      [REC_LIST](state, {
        rec_list
    }) {
        state.reclist = rec_list;
    },
    //首页数据列表
    [HOME_SHOP_LIST](state, {
        data_list
    }) {
        state.datalist = data_list
    }
}