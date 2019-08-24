import { Home,List,Allreth,Shopcar, Mine} from '../pages';
export const tabBtnRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            falg:true
        },
        name:"首页",
        icon:"\ue614"
    },
    {
        path:"/list",
        component:List,
        meta:{
            falg:true
        },
        name:"分类",
        icon:"\ue61f"
    },
    {
        path:"/allreth",
        component:Allreth,
        meta:{
            falg:true
        },
        name:"全球分类",
        icon:"\ue72f"
    },
    {
        path:"/shopcar",
        component:Shopcar,
        meta:{
            falg:true
        },
        name:"购物车",
        icon:"\ue61c"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            falg:true
        },
        name:"我的",
        icon:"\ue613"
    }
]



export const routeConfig = tabBtnRoute.concat()