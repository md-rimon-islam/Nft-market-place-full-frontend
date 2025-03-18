'use client'
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/Firebase/firebase.config';


export const AuthContext = createContext();


function MyContext({children}) {


    const [users, setUsers]  = useState([])
    const [loading, setLoading] = useState(true)



    // user create with eamil and password\

    const CreateUserEmailAndPassword  = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in with email and password


    const SignInUserWithEmailAndPassword = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Update user profile

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };





    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser);
        //   console.log('state capture', currentUser)
          
          setLoading(false);
        })
    
        return () =>{
          unsubscribe();
        }
    
      } ,[])

    




    const userInfo = {
        CreateUserEmailAndPassword,
        SignInUserWithEmailAndPassword,
        users, 
        setUsers,
        updateUserProfile
    }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default MyContext