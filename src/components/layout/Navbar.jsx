import { NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./Navbar.css";

const Navbar = () => {
    const userIsLogged = useAuthValue(); //vem pelo contexto de autenticação
    const { logout } = useAuthentication();//função logout está no hook useauthentication. Só importo aqui.

    // Function to render navigation items based on the user's authentication status
    const renderNavigationItems = () => {
        if (userIsLogged) {
            return (
                <>
                    <li>
                        <NavLink to="/home" end>Home</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/dashboard" end>Dashboard</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/posts/create" end>Post</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/about">Sobre</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>

                </>
            );
        } else {
            return (
                <>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/login" end>Entrar</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/register" end>Cadastrar</NavLink>
                    </li>
                    <span className="pipe_link"> |</span>
                    <li>
                        <NavLink to="/about">Sobre</NavLink>
                    </li>
                </>
            );
        }
    };

    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? ".active" : "")}>
                <img src="/MeuBlog.png" alt="logo Meu Blog" />
                {userIsLogged && (
                    <p className="nav_user_small">
                        Olá, {userIsLogged.displayName}!
                    </p>
                )}
            </NavLink>

            {userIsLogged && (
                <p className="nav_user">
                    Olá, {userIsLogged.displayName}!
                </p>
            )}

            <ul>
                {renderNavigationItems()}
                {userIsLogged && (
                    <li>
                        <button className="logout_btn" onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
