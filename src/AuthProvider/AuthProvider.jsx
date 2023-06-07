import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../src/firebase/firebase.config'


export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
const [loading,setLoading] = useState(true);
const [user,setUser] = useState([]);

// Create new user
const createUser = (email,pass) =>{
    return createUserWithEmailAndPassword(auth,email,pass)
}

// Sign in user
const loginUser = (email,pass) =>{
    return signInWithEmailAndPassword(auth,email,pass)
}

// Google sign in
const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
// Sign Out user
const logOut = ()=>{
    return signOut(auth)
}

// Update profile
const setProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

// Current user
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [])


// Share context data
const authInfo = {
    user,
    loginUser,
    loginWithGoogle,
    createUser,
    logOut,
    setProfile,
    loading,

    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider