import { useState } from 'react'
import Navbar from '../components/Navbar'
import { register } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"

const Register = () => {

    const [fullname, setFullName]= useState();
    const [email, setEmail]= useState();
    const [mobile, setMobile]= useState();
    const [password, setPassword]= useState();
    const [confirmPassword, setConfirmPassword]= useState();
    const dispatch= useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]=useState();

    const handleRegister=async(e)=>{
        setError(null);
        setIsLoading(true);
        e.preventDefault();

        if(!fullname || !email || !mobile || !password){
            setError("Please enter all the fields");
        }
        else if(password!==confirmPassword){
            setError("Passwords do not match")
        }
        else{
            const res= await register(dispatch,{
                fullname,
                email,
                mobile,
                password
            })
            console.log(res);

            if(res.error)
                setError(res.error.response.data)
        }
        setIsLoading(false)
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
                    <button className="register-btn" disabled={isLoading} onClick={handleRegister}>
                        REGISTER
                    </button>
                    {
                        error &&
                        <span className='form-error'>{error}</span>
                    }
                    <p className='register-login'>
                        Already have an account? 
                        <Link to="/login" className='link'>
                            <span>Login</span>
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Register