import { useState } from "react"
import { useInsertDocument } from "../../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

import "./CreatePost.css"
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const user = useAuthValue();//chamo o contexto

    const navigate = useNavigate();

    const { insertDocument, response } = useInsertDocument("posts")//posts é a coleção que quero criar no banco

    /*caso dê o erro "Missing or insufficient permissions", vou no firestore database, no site do firebase, vou em regras, e altero o false para true. */
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // try {
        //     new URL(image)
        // } catch (error) {
        //     return setFormError("A imagem precisa ser uma URL!")  
        // }

        //cria o array de tags
        //const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        //valida campos
        //const url_expression = "/^https?:\/\//";

        if (!title && !body && !image) {
            setFormError("Esses campos precisam ser preenchidos!");
            return;
        } else if (!title) {
            setFormError("O título precisa ser preenchido!");
            return;
            } else if (!image) {
                return setFormError("Digite a URL da imagem!")
        } else if (!body) {
            setFormError("A descrição precisa ser preenchida!");
            return;

        } else {

            //if (formError) return;
            const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

            insertDocument({
                title,
                image,
                body,
                tagsArray,
                uid: user.uid,
                createdBy: user.displayName
            })
            // redirect to home page
    navigate("/");
        }

    }

    return (
        <div className="container_post">
            <h2>Crie seu post!</h2>
            <form onSubmit={handleSubmit}>
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}

                <input
                    type="text"
                    name="title"
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

                    placeholder="Escreva seu post."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Adicione tags separando por vírgula. Ex: JS, React.js,..."
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