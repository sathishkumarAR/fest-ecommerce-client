import { useState } from 'react'
import Navbar from '../components/Navbar'
import { register } from '../redux/apiCalls';
import { useDispatch } from "react-redux"

const Register = () => {

    const [fullname, setFullName]= useState();
    const [email, setEmail]= useState();
    const [mobile, setMobile]= useState();
    const [password, setPassword]= useState();
    const [confirmPassword, setConfirmPassword]= useState();
    const dispatch= useDispatch();

    const handleRegister=(e)=>{
        e.preventDefault();

        if(password===confirmPassword){
            register(dispatch,{
                fullname,
                email,
                mobile,
                password
            })
        }

    }

  return (
    <div>
        <Navbar />
        <div className="register-container">
            <div className="register-wrapper">
                <h1 className='register-title'>CREATE AN ACCOUNT</h1>
                <form action="" className="register-form">
                    <input 
                        type="text" 
                        placeholder='Fullname' 
                        className="register-fullname" 
                        onChange={(e)=>setFullName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className="register-email" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder='Mobile' 
                        className="register-mobile" 
                        onChange={(e)=>setMobile(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className="register-password" 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder='Confirm Password' 
                        className="register-confirmPass" 
                        onChange={(e)=>setConfirmPassword(e.target.value)}

                    />

                    <p className="register-agreement">
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </p>
                    <button className="register-btn" onClick={handleRegister}>
                        REGISTER
                    </button>
                    <p className='register-login'>
                        Already have an account? <span>Login</span>
                    </p>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Register