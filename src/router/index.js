import VueRouter from 'vue-router'
import zhongHe from '../components/middle/zhongHe/zhongHe'
import middleList from '../components/middle/middleList'
import houDuan from '../components/middle/houDuan/houDuan'
import blank from '../components/middle/blank'
import Android from '../components/middle/Androidvue/Android'
import daiMa from '../components/middle/daiMa/daiMa'
import IOS from '../components/middle/IOSvue/IOS'
import kaiFa from '../components/middle/kaiFa/kaiFa'
import qianDuan from '../components/middle/qianDuan/qianDuan'
import renGong from '../components/middle/renGong/renGong'
import yueDu from '../components/middle/yueDu/yueDu'
import guanZhu from '../components/middle/guanZhu/guanZhu'
import bigBlank from '../components/qiTa/bigBlank'
export default new VueRouter(
    {
        routes:[
            {
                path: '/',
                redirect: '/zhongHe',
              },
            {
                path:'/guanZhu',
                component:guanZhu,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
             path:'/zhongHe',
             component:zhongHe,
             children:[
                {
                    path:'',
                    component:middleList, 
                },
                {
                    path:'middleList',
                    component:middleList, 
                },
                {
                    path:'blank',
                    component:blank, 
                }
             ]
            },
            {
                path:'/houDuan',
                component:houDuan,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                    path:'blank',
                    component:blank, 
                   }
                ]
            },
            {
                path:'/Android',
                component:Android,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                   },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/daiMa',
                component:daiMa,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                   },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/IOS',
                component:IOS,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/kaiFa',
                component:kaiFa,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/renGong',
                component:renGong,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/yueDu',
                component:yueDu,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
                path:'/qianDuan',
                component:qianDuan,
                children:[
                   {
                       path:'middleList',
                       component:middleList, 
                   },
                   {
                    path:'',
                    component:middleList, 
                },
                   {
                       path:'blank',
                       component:blank, 
                   }
                ]
            },
            {
               
                path: '/shouYe',
                redirect: '/zhongHe',
                  
            },
            {
                path:'/feiDian',
                component:bigBlank,
            },
            {
                path:'/zhiBo',
                component:bigBlank,
            },
            {
                path:'/huoDong',
                component:bigBlank,
            },
            {
                path:'/jingSai',
                component:bigBlank,
            },
            {
                path:'/shangChang',
                component:bigBlank,
            },
            {
                path:'/APP',
                component:bigBlank,
            },
            {
                path:'/chaJian',
                component:bigBlank,
            },
        ]
    }
)