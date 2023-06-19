import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                {/* <p>Meu Blog</p> */}
                <img src="/MeuBlog.png" alt="logo Meu Blog" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;