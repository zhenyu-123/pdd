//封装的请求
import ajax from "./ajax.js"
import axios1 from "axios"
import base from "@/config/baseURL.js";
//配置请求的参数
//当前环境
const BASE_URL = process.env.NODE_ENV === "development" ? base.baseURL.dev : base.baseURL.pro;
//配置请求的方法

// 请求轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');
//  请求导航 
export const getHomeNav = () =>ajax('/homenav')


export const getUserData=function(){
    return axios1.get("user",{
        method:"get",
        baseURL:"/api/"
    })
}

