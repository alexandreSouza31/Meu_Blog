import "./Register.css";

const Register = () => {
    return (
        <div className="register_container">
            <h1>Cadastre-se agora mesmo!</h1>
            <form>
                
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Digite seu nome."
                    />
                
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Digite seu email."
                    />
                
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Digite sua senha."
                    />
                
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme sua senha."
                    />
                <input type="button" value="Cadastrar" />
            </form>
        </div>
    )
}

export default Register;