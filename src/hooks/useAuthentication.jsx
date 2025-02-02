import { db } from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState,useEffect } from 'react';

export const useAuthetication = ()=>{
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled (){
        if(cancelled){
            return
        }
    }

    const createUser = async (data)=>{
        checkIfIsCancelled();
        setLoading(true);
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user,{
                displayName:data.name

            })
            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes('Password')){
                systemErrorMessage = 'Password must be at least 6 characters long'
            }else if(error.message.includes('email-already')){
                systemErrorMessage = 'Email is already in use'
            }else{
                systemErrorMessage = "tente mais tarde"
            }
            setError(systemErrorMessage);
        }
        setLoading(false)
    };
    useEffect(()=>{
        return ()=>setCancelled(true)
    },[])

    return{
        auth,
        createUser,
        error,
        loading

    }
}