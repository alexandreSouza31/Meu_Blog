import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    const [query, setQuery] = useState("");
    const [posts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container_home">
            <h1>Veja os posts mais recentes</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="busque posts por tags"
                    onChange={(e) => setQuery(e.target.value)} />
                <input type="button" value="Pesquisar" />
            </form>

            <div className="posts_container">
                <h2>posts...</h2>
                {posts && posts.length === 0 && (
                    <div className="no_posts">
                        <p>Não foi encontrado nenhum post</p>
                        <Link to="/posts/create">Crie seu post agora mesmo!</Link>

                    </div>
                )}
            </div>
        </div>

    )
}

export default Home;