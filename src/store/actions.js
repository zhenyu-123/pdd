//请求方法
// import { getHomeCasual } from "../api/index"


import {
    HOME_CASUAL
} from "./mutation-types"
// 请求的模拟数据
import data from "@/mock/index.js"
export default {
    // 1. 获取首页轮播图    /解构
    async reqHomeCasual({ commit }) {
       
        // getHomeCasual().then((response) => {
        //     console.log(response);
        // });
        // console.log(await getHomeCasual());
        // const result = await getHomeCasual();
        // if (200 === result.success_code) {
            // 此处提交过去的是一个数组
            // console.log(data.homecasual)
            commit(HOME_CASUAL, { home_casual: data.homecasual[0].message});
            //   callBack && callBack();
        // }
    },
}