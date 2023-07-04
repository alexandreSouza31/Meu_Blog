import "./Login.css";

const Login = () => {
    return (
        <div className="login_container">
            <h1>Faça Login e aproveite!</h1>
            <form>
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

                <input type="button" value="Entrar" />
            </form>
        </div>
    )
}

export default Login;