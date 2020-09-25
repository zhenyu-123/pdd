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
// 搜索数据
Mock.mock("/api/searth",{
    "data":[
        {
         name:"服饰",
         "items|10":[
            {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
         ],
         tag:"phone",
         "category|6":[
            {icon:"@dataImage('100x60')"}
         ]
        },
        {
            name:"鞋包",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"母婴",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"男装",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"内衣",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"百货",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"美妆",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },   {
            name:"手机",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"电器",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,3)"}
            ]
        },
        {
            name:"女装",
            "items|10":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,2)"}
            ]
        },
        {
            name:"男装",
            "items|9":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,2)"}
            ]
        },
        {
            name:"夏装",
            "items|9":[
               {icon:"@dataImage('90x90')",title:"@csentence(2,2)"}
            ]
        }
        
    ],
    code:200
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