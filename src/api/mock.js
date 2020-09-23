import Mock from "mockjs";
//设置请求向应时间
Mock.setup({
    timeout: "100"
})

// 拦截到某个请求，返回数据
Mock.mock("/api/user", {
    username: "小明",
    age: 12,
    birth: 1997,
    sex: "男"
})
Mock.mock("/api/homenav", {
    username: "213小明",
    age: 12,
    birth: 1997,
    sex: "男"
})
//随机生成
Mock.mock("/homenav", {
    data: {
        "time": "@datetime",
        "score|1-900": 900,
        "cname": "@cname",
        "ename": "@name",
        "email": "@email",
        "image": "@image",
        "nowTime": "@now"
    }

})