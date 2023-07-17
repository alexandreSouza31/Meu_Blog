import { useState } from "react"

import "./CreatePost.css"

export const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container_post">
            <h2>Crie seu post!</h2>
            <form onSubmit={handleSubmit}>
                {formError && <p className="error">{formError}</p>}

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

                {!loading && <input type="submit" value="Postar" />}
                {loading && (
                    <input type="submit" value="Aguarde..." />
                )}
                
            </form>
        </div>
    )
}