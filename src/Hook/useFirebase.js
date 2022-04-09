import { useEffect, useState } from "react"
import app from '../firebase.init'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

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

    const handleSingOut = () =>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        setUser(user)
    })
    },[])
    // return [user, setUser]
    return {user, 
        handleSingOut,
        singInWithGoogle}
}





export default useFirebase;