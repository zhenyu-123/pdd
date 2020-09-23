import Mock from "mockjs";
//设置请求向应时间
Mock.setup({
    timeout: "100"
})

// 首页数据模拟
// 轮播图
Mock.mock("/api/homecasual", {

    data: [{
            "id": 1,
            "imgurl": "@image",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        },
        {
            "id": 2,
            "imgurl": "@image",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        }, {
            "id": 3,
            "imgurl": "@image",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        }
    ],
    code: 200
})
// 首页数据列表
Mock.mock("/api/datalist", {
    data: [{
            "id": "@increment()",
            "image": "@image",
            "title": "@csentence(9,20)",
            "price|2-10000": 10000,
            "number|2-9999": 9999,
            "img1": "@image",
            "img2": "@image"
        },
        {

            "id": "@increment()",
            "image": "@image",
            "title": "@csentence(9,20)",
            "price|2-10000": 10000,
            "number|2-9999": 9999,
            "img1": "@image",
            "img2": "@image"
        },
        {
            "id": "@increment()",
            "image": "@image",
            "title": "@csentence(9,20)",
            "price|2-10000": 10000,
            "number|2-9999": 9999,
            "img1": "@image",
            "img2": "@image"
        }
    ],
    code: 200
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