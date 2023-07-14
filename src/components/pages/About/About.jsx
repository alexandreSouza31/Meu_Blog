import { Link } from "react-router-dom";
import "./About.css"

const About = () => {
    return (
        <div className="container_about">
            <h2>Sobre o Meu Blog</h2>
            <p>Este app usa React.js no Front-end, e no back-end, o Firebase.</p>
            <p>Aqui o usuário pode realizar um cadastro, logar na aplicação, e com isso realizar posts, comentar e curtir.</p>
            <p>Viva essa experiência!</p>
            
        </div>
    )
}

export default About;