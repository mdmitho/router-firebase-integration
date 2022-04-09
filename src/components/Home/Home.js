import React from 'react';
import useFirebase from '../../Hook/useFirebase'

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>This is Home</h1>
            <p>Current Use is :{user? user.displayName : " No body"}</p>
        </div>
    ); 
};

export default Home;