import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <p>Nossas redes sociais</p>
            <ul className="social_list">
                <li>
                    <Link to="https://www.linkedin.com/in/alexandremariano31/">
                        <FaLinkedinIn />
                    </Link>
                </li>
                <li>
                    <Link to="mailto:alexandre31_m@hotmail.com">
                        <SiGmail/>
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/alexandreSouza31">
                        <FaGithub />
                    </Link>
                </li>
                <li>
                    <Link to="https://discord.com/channels/@me/831222330206322699">
                        <FaDiscord />
                    </Link>
                </li>
            </ul>
            <p>
                <span>Meu </span>
                <span>Blog </span>
                | &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;