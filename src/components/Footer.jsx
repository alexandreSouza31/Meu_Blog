import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <section className="social">
                    <p>Nossas redes sociais</p>
                    <ul className="social_list">
                        <li>
                            <Link
                                to="https://www.linkedin.com/in/alexandremariano31/"
                                target="_blank" //abrir em nova guia
                                rel="noopener noreferrer" /*evitar possíveis ataques
                        das páginas que eu fizer vínculo*/
                            >
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="mailto:alexandre31_m@hotmail.com"
                                target="_blank" rel="noopener noreferrer">
                                <SiGmail />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://github.com/alexandreSouza31"
                                target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://discord.com/channels/@me/831222330206322699"
                                target="_blank" rel="noopener noreferrer">
                                <FaDiscord />
                            </Link>
                        </li>
                    </ul>

                </section>

                <hr />

                <section className="contact">
                    <p> Entre em contato conosco</p>
                    <a> chame no chat clicando aqui!</a>
                    <p className="phones"> pelos telefones:
                        <span> áreas metropolitanas 4444-4444</span>
                        <span> outras regiões 0800-444-4444</span>
                    </p>

                    <p>Endereço: Av. Frame, 240 - Work, JS - CEP: 99999-999</p>
                </section>

                <hr />

                {/* <section className="informations">

</section> */}
                <section className="brand">
                    <p>Nossos termos de uso</p>
                    <a href="/terms">termos de uso Meu Blog</a>
                    <p>
                        <span>Meu Blog </span>
                        |
                        <span className="copy">&copy;</span>
                        2023
                    </p>
                </section>
            </div>



        </footer>
    )
}

export default Footer;