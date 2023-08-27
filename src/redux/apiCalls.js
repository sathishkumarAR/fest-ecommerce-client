import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"


axios.defaults.baseURL=(process.env.NODE_ENV ==="production")?"https://fest-server.onrender.com":"http://localhost:5000"

const getToken=()=>{
    const token= JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
    return token;
}

const login=async(dispatch,user)=>{
    
    dispatch(loginStart())

    try {
        const res = await axios.post("/api/auth/login", user)

        dispatch(loginSuccess(res.data))
        return res.data;

    } catch (error) {
        dispatch(loginFailure())
        return {error}
    }
}

const register= async(dispatch, user)=>{

    dispatch(loginStart);

    try {

        const res = await axios.post("/api/auth/register",user)
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
        return {error}
    }

}


export {login, register, getToken};

