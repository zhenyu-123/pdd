
import {
    HOME_CASUAL,
    DATA_LIST
} from './mutation-types'
export default {
    //['home_casual'],为了将公共的变量转为字符串,从而使用常量替代mutation事件类型
    //首页轮播图
    [HOME_CASUAL](state, { home_casual }) {
        state.homecasual = home_casual;
    },
    //首页数据列表
    [DATA_LIST](state,{data_list}){
        state.datalist=data_list
    }
}