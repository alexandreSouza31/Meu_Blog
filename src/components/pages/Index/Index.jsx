import { Link } from "react-router-dom";
import "./Index.css";

const Index = () => {
    return (
        <div className="container_index">
            <h1>Bem-vindo(a) ao Meu Blog!</h1>
            <h1>Crie, compartilhe, interaja!</h1>
            <div className="links">
                <Link to="/login"><h2>Faça login,</h2></Link>
                ou
                <Link to="/register"><h2>Cadastre-se!</h2></Link>

            </div>

        </div>
    )
}

export default Index;