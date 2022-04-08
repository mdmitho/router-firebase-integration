import React from 'react';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase({})
    return (
        <div>
            <h1>Please login</h1>
            <div className="" style={{margin:"20px"}}>
                <button onClick={singInWithGoogle}>Google Sing In</button>
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