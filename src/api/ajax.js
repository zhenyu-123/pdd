import axios from "axios"
//当前环境
import base from "@/config/baseURL.js";
const BASE_URL = process.env.NODE_ENV === "development" ? base.baseURL.dev : base.baseURL.pro;

export default function (url, params = {}, type = 'GET') {


    let promise;
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 3000
    });
    return new Promise((resolve, reject) => {
        //判断请求方式
        if (type === "GET" || type === "get") {
            // 拼接参数
            let paramStr = '';
            Object.keys(params).forEach((value, index) => {
                paramStr += value + "=" + params[index] + "&"
            })
            // 过滤最后的&
            if (paramStr != '') {
                paramStr = paramStr.substr(0, paramStr.lastIndexOf("&"))
            }
            // 拼接完整的请求路径
            // url += '?' + paramStr

            //发起get请求
            promise = instance.get(url)
        } else if (type === "POST" || type === "post") {

            promise = instance.post(url, params)
        }

        // 返回请求后的结果
        promise.then((respones) => {
            resolve(respones.data)
        }).catch((error) => {
            reject(error)
        })
    })
}