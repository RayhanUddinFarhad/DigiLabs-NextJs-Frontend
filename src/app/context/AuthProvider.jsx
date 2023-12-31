"use client"
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)







    const signUp = (email, password) => {
        

        return createUserWithEmailAndPassword(auth, email, password)


    }

    const googleLogin = () => {
        



        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        

        return signOut(auth)
    }

    const logIn = (email, password) => {

        


        return signInWithEmailAndPassword(auth, email, password)




    }

    const updateUserProile = (name, photo) => {


        return updateProfile(auth.currentUser , {

            displayName : name, photoURL  : photo
        })
    }




    useEffect(() => {



        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser)


           
            console.log(currentUser);
        })


        return () => {



            return unsubscribe()
        }
    }, [])



    const authInfo = {


        user,
        signUp,
        googleLogin,
        logOut,
        logIn,
        updateUserProile
    }









    return (
        <AuthContext.Provider value={authInfo}>

        {children}



    </AuthContext.Provider>
    );
};

export default AuthProvider;