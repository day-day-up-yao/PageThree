import Loadable from 'react-loadable';
import Loading from "../common/loading"

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const List = Loadable({
    loader:()=>import("./list"),
    loading:Loading
})

const Allreth = Loadable({
    loader:()=>import("./allreth"),
    loading:Loading
})

const Shopcar = Loadable({
    loader:()=>import("./shopcar"),
    loading:Loading
})

const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})


export {
    Home,
    List,
    Allreth,
    Shopcar,
    Mine
}