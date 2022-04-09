import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init'


const auth = getAuth(app)
const Login = () => {
     const location =useLocation()
     const navigate = useNavigate()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)

const from = location?.state?.from?.pathname || '/'

    const handleGoogleSingIn = () =>{
        signInWithGoogle ()
        .then (() => {
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h1>Please login</h1>
            <div className="" style={{margin:"20px"}}>
                <button onClick={handleGoogleSingIn}>Google Sing In</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;