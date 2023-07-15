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

    //register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email, data.password
            )

            await updateProfile(user, {
                displayName:data.displayName
            })

            setLoading(false);

            return user
            
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage="A senha precisa ter pelo menos 6 caracteres!"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado!";
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!";
            }
            setLoading(false);

            setError(systemErrorMessage);
        }

    }

    //login
    const signInUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await signInWithEmailAndPassword(
                auth,data.email,data.password
            )

            setLoading(false);

            return user
            
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if (error.message.includes("auth/wrong-password")) {
                systemErrorMessage = "Senha incorreta!"
                
            }else if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado!"
                
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!";
            }
            setLoading(false);

            setError(systemErrorMessage);
        }

    }

    //logout

    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,createUser,signInUser,error,loading,logout
    }

}