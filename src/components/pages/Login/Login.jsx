import { useEffect, useState } from "react";

import { useAuthentication } from "../../../hooks/useAuthentication";

import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUser, error: authError, loading } = useAuthentication();
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");//começa vazio
        //agr vou formar os usuários baseado nos inputs:
        const user = {
            email,
            password,
        }
        //console.log(user)

        const res = await signInUser(user);
        console.log(res);
    }

    useEffect(() => {//verificará se o erro é o do authError
        if (authError) {
            setError(authError);
        }
    }, [authError])

    return (
        <div className="login_container">
            <h1>Faça Login e aproveite!</h1>
            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Digite seu email."
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Digite sua senha."
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!loading && <input type="submit" value="Entrar" />}
                {loading && (
                    <input type="submit" value="Aguarde..." />
                )}
            </form>
        </div>
    )
}


export default Login;