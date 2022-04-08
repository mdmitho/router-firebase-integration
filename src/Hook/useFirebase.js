import { useEffect, useState } from "react"
import app from '../firebase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const provider = new GoogleAuthProvider()

    const singInWithGoogle = () =>{
        // console.log('singing in soon')
        signInWithPopup(auth, provider)
        .then((result) => {
const user = result.user
setUser(user)
console.log(user);
        })
    }
    // return [user, setUser]
    return {user, singInWithGoogle}
}

export default useFirebase;