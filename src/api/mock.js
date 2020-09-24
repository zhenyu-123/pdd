import Mock from "mockjs";
//设置请求向应时间
Mock.setup({
    timeout: "100-300"
})

// 首页数据模拟
// 轮播图
Mock.mock("/api/homecasual", {

    data: [{
            "id": 1,
            "imgurl": "@dataImage",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        },
        {
            "id": 2,
            "imgurl": "@dataImage",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        }, {
            "id": 3,
            "imgurl": "@dataImage",
            "detail": "http://mobile.yangkeduo.com/subject.html?subject_id=6153"
        }
    ],
    code: 200
})
// 首页数据列表
Mock.mock("/api/datalist", {
    "data|6": [{
        "id": "@increment()",
        "image": "@dataImage",
        "title": "@csentence(9,20)",
        "price|2-10000": 10000,
        "number|2-9999": 9999,
        "img1": "@image",
        "img2": "@image"
    }],
    code: 200
})
// 推荐列表数据
Mock.mock("/api/recommend", {
    "data|18": [{
        thumb_url: "@dataImage('300x350')",
        short_name: "@csentence(4,9)",
        "price|12-8888": 8888,
        "sales_tip": "@natural(1,1444)"
    }],
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