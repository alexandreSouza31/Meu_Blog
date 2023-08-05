// Navbar.js
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./Navbar.css";

const Navbar = () => {
    const currentUser = useAuthValue(); // Use more explicit variable name

    // Function to render navigation items based on the user's authentication status
    const renderNavigationItems = () => {
        if (currentUser) {
            return (
                <>
                    <li>
                        <NavLink to="/home" end>Home</NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/dashboard" end>Dashboard</NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/posts/create" end>Post</NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <NavLink to="/" end>Home</NavLink>
                    </li>
                    <span> |</span>
                    <li>
                        <NavLink to="/login" end>Entrar</NavLink>
                    </li>
                    |
                    <li>
                        <NavLink to="/register" end>Cadastrar</NavLink>
                    </li>
                    |
                </>
            );
        }
    };

    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? ".active" : "")}>
                <img src="/MeuBlog.png" alt="logo Meu Blog" />
                {currentUser && (
                    <p className="nav_user_small">
                        Olá, {currentUser.displayName}!
                    </p>
                )}
            </NavLink>

            {currentUser && (
                <p className="nav_user">
                    Olá, {currentUser.displayName}!
                </p>
            )}

            <ul>
                {renderNavigationItems()}
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
                {currentUser && (
                    <li>
                        <button className="logout_btn" onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
