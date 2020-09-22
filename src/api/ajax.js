import axios from "axios"

export default function (url, params = {}, type = 'GET') {


    let promise;
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
            const instance = axios.create({
                baseURL: '/api/',
                timeout:3000
              });
            promise = instance.get(url)
            console.log(promise)
        } else if (type === "POST" || type === "post") {
            promise = axios.post(url, params)
        }

        // 返回请求后的结果
         promise.then((respones) => {
            resolve(respones.data)
        }).catch((error) => {
            reject(error)
        })
    })
}