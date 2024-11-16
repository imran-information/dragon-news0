/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const infoPass = {
        signUpUser,
        setUser,
        user,
        signOutUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={infoPass}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;