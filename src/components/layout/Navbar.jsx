import { NavLink } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./Navbar.css";

const Navbar = () => {
    const { user } = useAuthValue();//chamo o contexto
    

    return (
        <nav>
            <NavLink to="/" end
                className={({ isActive }) => (isActive ? ".active" : "")}
>
                <img src="/MeuBlog.png" alt="logo Meu Blog" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/" end
                         >Home</NavLink>
                </li>
                {user !==undefined && (
                    <>
                        <li>
                            <NavLink to="/login" end
                            >Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" end
                            >Cadastrar</NavLink>
                        </li>
                    </>
                )}
                {user === undefined && (
                     <>
                     <li>
                         <NavLink to="/dashboard" end
                         >Dashboard</NavLink>
                     </li>
                     <li>
                         <NavLink to="/posts/create" end
                         >Post</NavLink>
                     </li>
                 </>
                )}
                <li>
                    <NavLink to="/about" >Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;