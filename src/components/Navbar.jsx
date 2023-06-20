import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" end className={({ isActive }) => (isActive ? ".active" : "")}>
                <img src="/MeuBlog.png" alt="logo Meu Blog"  />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/" end >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login" end >Entrar</NavLink>
                </li>
                <li>
                    <NavLink to="/register" end >Cadastrar</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;