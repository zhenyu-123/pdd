import ajax from "./ajax.js"

//配置请求的参数
const BASE_URL = "http://127.0.0.1:3000";

//配置请求的方法
export const  getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');

 