import { useEffect, useState } from "react";

import { db } from "../firebase/config";
import {
    query,
    orderBy,
    onSnapshot,
    where,
    collection,
  } from "firebase/firestore";

//import { collection } from "firebase/firestore/lite";

export const useFetchDocument = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup-apaga registro de funções na mudança do componente(problemas de memória)
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            if (cancelled) return;

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;
                q = await query(collectionRef, orderBy("createdAt", "desc"));
                await onSnapshot(q, (QuerySnapshot) => {//onSnapshot:serve pra mapear os dados. Sempre que tiver um dado alterado, ele o retorna renovado.
                    // querySnaphot executa essa função pra trazer os documentos

                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({//trago de acordo com regras do firebase
                            id: doc.id,//id vem separado dos dados
                            ...doc.data(),
                        }))
                    )
                })

                setLoading(false);

            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }
        
        loadData();//só será executada quando algum desses dados for alterado, nesse caso terei a execução do carregamento de dados.

    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {documents, loading, error};
}