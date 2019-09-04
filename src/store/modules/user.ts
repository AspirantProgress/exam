import {observable,action} from "mobx";
import {login} from "../../api/index";
interface LoginForm{
    user_name: string,
    user_pwd: string
}

// enum HttpType{
//     object,
//     Array
// }

// interface HttpInfo{
//     code: number,
//     messgae: string,
//     data?: HttpType
// }
class User{
    @observable isLogin:boolean =false;
    @action async login(from:LoginForm):Promise<any>{
        let result:any=await login(from);
        console.log(result,"result...........");
        return result
    }
}

export default User