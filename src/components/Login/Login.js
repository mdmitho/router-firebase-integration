import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please login</h1>
            <div className="" style={{margin:"20px"}}>
                <button>Google Sing In</button>
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