import Vue from "vue";
import vueRouter from "vue-router";
Vue.use(vueRouter);
// 引入路由组件
import Home from "@/view/home/home";
import Recommend from "@/view/recommend/recommend";
import Search from "@/view/search/search";
import Chart from "@/view/chart/chart";
import Me from "@/view/me/me";

// 首页板块二级路由
import Box from '@/view/home/Children/Box'
import Dress from '@/view/home/Children/Dress'
import Ele from '@/view/home/Children/Ele'
import Food from '@/view/home/Children/Food'
import General from '@/view/home/Children/General'
import Hot from '@/view/home/Children/Hot'
import Mbaby from '@/view/home/Children/Mbaby'
import Shirt from '@/view/home/Children/Shirt'
import Man from '@/view/home/Children/Man'

export default new vueRouter({
     //配置一级路由
     routes: [{
               path: "/home",
               component: Home,
               title: "首页",
               children: [{
                         path: "Box",
                         component: Box,
                    },
                    {
                         path: "Dress",
                         component: Dress,
                    },
                    {
                         path: "Ele",
                         component: Ele,
                    },
                    {
                         path: "Food",
                         component: Food,
                    },
                    {
                         path: "General",
                         component: General,
                    },
                    {
                         path: "Hot",
                         component: Hot,
                    },
                    {
                         path: "Mbaby",
                         component: Mbaby,
                    },
                    {
                         path: "Shirt",
                         component: Shirt,
                    },
                    {
                         path: "Man",
                         component: Man,
                    },
                    //解决第一次不在热搜页面
                    {
                         path: "/home",
                         redirect: "/home/hot",
                    }
                    
               ]
          },
          {
               path: "/recommend",
               component: Recommend,
          },
          {
               path: "/search",
               component: Search,
          },
          {
               path: "/chart",
               component: Chart,
          },
          {
               path: "/me",
               component: Me,
          },
          //在/#/下默认打开首页
          {
               path: "/",
               redirect: "/home",
          }
     ]
})