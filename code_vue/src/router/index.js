import VueRouter from "vue-router";
import AbOut from "@/components/AbOut";
import HoMe from "@/components/HoMe";
import NeWs from "@/components/NeWs";
import MessAge from "@/components/MessAge";
import MessageDetail from "@/components/MessageDetail";
import NewsDetail from "@/components/NewsDetail";
const router = new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:AbOut,
            meta:{isAuth:false,title:'关于'}
        },
        {
            path:'/home',
            component:HoMe,
            meta:{isAuth:false,title:'主页'},
            children:[
                {
                    path:'news',
                    component:NeWs,
                    meta:{isAuth:true,title:'新闻'},
                    beforeEnter(to,from,next){
                        if(localStorage.getItem('name')==="feng1"){
                            next()
                        }else{
                            alert("没有权限")
                        }
                    },
                    children:[
                        {
                            name:'newsDetail',
                            path:'detail/:id/:name',
                            component:NewsDetail,
                            props(route){
                                return {
                                    id:route.params.id,
                                    name:route.params.name
                                }
                            }
                        }
                    ]

                },
                {
                    path:'messages',
                    component:MessAge,
                    meta:{isAuth: true,title: "消息"},
                    children:[
                        {
                            path:'detail/:id/:name',
                            component: MessageDetail
                        }
                    ]
                }
            ]
        },
    ]
})
// router.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){
//         if(localStorage.getItem("name")==='feng1'){
//             next()
//         }else{
//             alert("没有权限")
//         }
//     }else{
//         next()
//     }
// })
router.afterEach((to)=>{
    document.title=to.meta.title||'枫'
})
export default router