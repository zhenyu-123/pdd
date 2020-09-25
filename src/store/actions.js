//请求方法
import {
    getHomeCasual,
    getData, getrecommend,getsearth
} from "../api/index"

//mutation
import {
    HOME_CASUAL,
    HOME_SHOP_LIST,
    REC_LIST,
    SEARTH
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
    // 首页数据列表
    async getDatas({
        commit
    }) {
        let result = await getData();
        if (result.code == 200) {
            commit(HOME_SHOP_LIST, {data_list: result.data })
        }
    },
    // 推荐页数据
    async getrecommend({commit}){
        let result =  await getrecommend();
        if(result.code==200){
            commit(REC_LIST,{rec_list:result.data})
        }
    },
    // 搜索数据
    async reqSearchGoods({commit}){
        let result = await getsearth();
        if(result.code==200){
            commit(SEARTH,{searthlist:result.data})
        }
    }
}