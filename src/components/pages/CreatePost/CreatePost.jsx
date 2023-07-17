import { useState } from "react"
import { useInsertDocument } from "../../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

import "./CreatePost.css"

export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const  user  = useAuthValue();//chamo o contexto

    const {insertDocument,response}=useInsertDocument("posts")//posts é a coleção que quero criar no banco

    /*caso dê o erro "Missing or insufficient permissions", vou no firestore database, no site do firebase, vou em regras, e altero o false para true. */
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        insertDocument({
            title,
            image,
            body,
            tags,
            uid: user.uid,
            createdBy:user.displayName
        })

    }

    return (
        <div className="container_post">
            <h2>Crie seu post!</h2>
            <form onSubmit={handleSubmit}>
                {response.error && <p className="error">{response.error}</p>}

                <input
                    type="text"
                    name="title"
                    required
                    placeholder="Escreva o título do post."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Insira a URL da imagem pro post."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <textarea
                    name="body"
                    required
                    placeholder="Escreva seu post."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Adicione tags pro post separando por vírgula."
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                {!response.loading && <input type="submit" value="Postar" />}
                {response.loading && (
                    <input type="submit" value="Aguarde..." />
                )}
                
            </form>
        </div>
    )
}