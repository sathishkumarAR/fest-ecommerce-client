import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"


const getToken=()=>{
    const token= JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token
    return token;
}

const login=async(dispatch,user)=>{

    dispatch(loginStart())

    try {
        const res = await axios.post("/api/auth/login", user)

        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}

const register= async(dispatch, user)=>{

    dispatch(loginStart);

    try {

        const res = await axios.post("/api/auth/register",user)
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }

}


export {login, register, getToken};

