import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../module/user";

const Login = () => {
    const user = useSelector(({user})=>user);
    const dispatch = useDispatch();

    const onChange = (e) =>{
        const {name,value} = e.target;
        console.log(name,value)
        dispatch(changeInput({
            form:"login",
            name:name,
            value:value
        }))
    }

    useEffect(()=>{
        console.log(user);
    },[user])

    return (
        <div>
            <input type="text" name="id" onChange={onChange}></input><br/>
            <input type="password" name="password" onChange={onChange}></input><br/>
            <button>로그인</button>
        </div>
    );
}

export default Login;