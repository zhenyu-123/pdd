//封装的请求
import ajax from "./ajax.js"
//配置请求的参数

//配置请求的方法

// 请求轮播图
export const getHomeCasual = () => ajax('/homecasual');
//  请求首页数据列表 
export const getData = () =>ajax('/datalist')


