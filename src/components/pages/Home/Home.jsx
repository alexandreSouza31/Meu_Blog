import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchDocument } from "../../../hooks/useFetchDocument";
import { FaSearch, FaSmileBeam, FaUser } from "react-icons/fa"

import "./Home.css";
import "./DetailPost.css";

const Home = () => {

    const [query, setQuery] = useState("");
    const { documents: posts, loading } = useFetchDocument("posts");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container_home">
            <form onSubmit={handleSubmit}>
                <div className="container_search">

                    <input
                        type="text"
                        placeholder="busque posts por tags"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {/* <input type="button" value="Pesquisar" /> */}
                    <button><FaSearch /></button>
                </div>
                <h2>Veja os posts mais recentes</h2>
            </form>
            <hr />

            <div className="posts_container">
                {loading && <p>Carregando</p>}
                {posts && posts.map((post) => (
                    <div key={query} className="card_post">
                        <p className="container_user">
                            <span >< FaUser /></span>
                            <p className="user">{post.createdBy}</p>
                        </p>
                        <div className="post_details">
                            <h3>{post.title}</h3>
                            <h4>{post.body}</h4>
                            <p>{post.tagsArray}</p>
                            <img src={post.image} alt="" />
                        </div>

                    </div>
                ))}

                <p className="end_posts">É só isso por enquanto.<FaSmileBeam /></p>
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