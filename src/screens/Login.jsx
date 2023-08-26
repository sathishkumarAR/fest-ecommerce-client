import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import { login } from '../redux/apiCalls';

const Login = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {isFetching} = useSelector(state=>state.user);
    const [error, setError] = useState();

    const dispatch = useDispatch();


    const handleLogin=async(e)=>{
        setError(null);
        e.preventDefault();
        const res= await login(dispatch, {email,password})
        if(res.error){
            setError(res.error.response.data)
        }
    }

  return (
    <div>
        <Navbar />
        <div className="login-container">
            <div className="register-wrapper">
                <h1 className='register-title'>Login</h1>
                <form action="" className="register-form">
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className="register-email" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className="register-password" 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="register-agreement">
                    By signing in, I agree to the <b>Terms and Conditions</b>
                    </p>
                    <button className="register-btn" disabled={isFetching} onClick={handleLogin} >
                        LOGIN
                    </button>
                    {
                        error &&
                        <span className='form-error'>{error}</span>
                    }
                    <span>Forgot password?</span>
                    <p className='register-login'>
                        New to Fest? <span>Create your account</span>
                    </p>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login