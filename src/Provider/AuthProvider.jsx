import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [partner, setPartner] = useState(0);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const createUser = (email, pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signIn = (email, pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }


    const profileUpdate = (updatedInfo)=>{
        updateProfile(auth.currentUser, updatedInfo)
    }



    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }



    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
    
        return ()=>{
            unsubscribe();
        }
    
    },[]);

    


 

    const authInfo = {

        googleSignIn,
        createUser,
        signIn,
        user,
        setUser,
        loading,
        setLoading,
        profileUpdate,
        logOut,
        setPartner, 
        partner



    }

    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;