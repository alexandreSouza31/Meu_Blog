import { NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const userIsLogged = useAuthValue();
    const { logout } = useAuthentication();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderNavigationItems = () => {
        if (userIsLogged) {
            return (
                <>
                    {isOpen && (
                        <ul className={`menu ${isOpen ? "open" : ""}`}>
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
                            <li>
                                <button className="logout_btn" onClick={logout}>Sair</button>
                            </li>
                        </ul>
                    )}
                </>
            );
        } else {
            return (
                <>
                    {isOpen && (
                        <ul className={`menu ${isOpen ? "open" : ""}`}>
                            <li>
                                <NavLink to="/" end>Início</NavLink>
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
                        </ul>
                    )}
                </>
            );
        }
    };

    return (
        <>
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
                <button className={`hamburguer ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </nav>
            {renderNavigationItems()} {/* Renderiza os itens de navegação */}
        </>
    );
};

export default Navbar;
