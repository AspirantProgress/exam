
//一级路由
import Login from "../views/login";
import Home from '../views/home';

//二级路由
// import Login from "../views/login"

export default {
    routes:[{
        path:"/login",
        component:Login
    },{
        path:"/Home",
        component:Home,
        Children:[{
            path:"/Home/content",
            component:()=>null
        }]
    }]
}



 

