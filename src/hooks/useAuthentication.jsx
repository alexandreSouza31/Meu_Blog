import { useEffect, useState } from "react"

import  { db } from "../firebase/config.js" ;

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup-apaga registro de funções na mudança do componente(problemas de memória)
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {//função pra evitar vazamento de memória
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,data.email,data.password
            )

            await updateProfile(user, {
                displayName:data.displayName
            })
            return user
            
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
        }

        setLoading(false);
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,createUser,error,loading
    }

}