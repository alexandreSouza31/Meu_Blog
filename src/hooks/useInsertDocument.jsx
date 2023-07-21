
import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config";
import {
    collection,//é como se fosse a tabela do bd não-relacional;
    addDoc,//inserir o documento
    Timestamp,//marcar o horário de criação
} from "firebase/firestore";

const initialState = {
    loading: null,
    error:null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {loading:true,error:null}
        case "INSERTED_DOC":
            return {loading:false,error:null}
        case "ERROR":
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) => {//qual é a coleção
    const [response, dispach] = useReducer(insertReducer, initialState);

    //cleanup-apaga registro de funções na mudança do componente(problemas de memória)
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispach(action);
        }
        //com isso vejo se continua com o hook ou não
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({
            type: "LOADING",//inicio o loading antes de inserir o documento
            payload:insertDocument,
        })
        
        try {
            const newDocument = { ...document, createdAt: Timestamp.now() }
            
            const insertDocument = await addDoc(
                collection(db, docCollection),/*vai procurar no bd a coleção que passei como argumento da função */
                newDocument//se tiver td certo, ele insere esse documento na coleção.
            )
            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload:insertDocument
            })

        } catch (error) {
             checkCancelBeforeDispatch({
                type: "ERROR",
                payload:error.message
             })
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    },[])

    return {insertDocument,response}

}