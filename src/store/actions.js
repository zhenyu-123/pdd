//请求方法
import {
    getHomeCasual,
    getData
} from "../api/index"


import {
    HOME_CASUAL,
    DATA_LIST
} from "./mutation-types"
export default {
    // 1. 获取首页轮播图    /解构
    async reqHomeCasual({
        commit
    }, callBack) {
        let result = await getHomeCasual();
        if (200 === result.code) {
            // 此处提交过去的是一个数组
            commit(HOME_CASUAL, {
                home_casual: result.data
            });
            callBack && callBack();
        }
    },
    // 首页导航
    async getData({
        commit
    }) {
        let result = await getData();
        if (result.code == 200) {
            commit(DATA_LIST, {
                data_list: result.data
            })
        }
    }
}