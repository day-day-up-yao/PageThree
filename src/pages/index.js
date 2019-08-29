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
const City = Loadable({
    loader:()=>import("./city"),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
const Searchoth = Loadable({
    loader:()=>import("../component/searchoth"),
    loading:Loading
})
const Shopyes = Loadable({
    loader:()=>import("../component/shopcar/shopyes"),
    loading:Loading
})

export {
    Home,
    List,
    Allreth,
    Shopcar,
    Mine,
    Login,
    City,
    Search,
    Searchoth,
    Shopyes
}