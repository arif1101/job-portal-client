import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('state captured', currentUser?.email)

            if(currentUser?.email){
                const user = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt', user,{withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false)
                })
                
            }
            
            
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;