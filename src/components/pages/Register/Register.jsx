import { useState } from "react";

import "./Register.css";
import { useAuthentication } from "../../../hooks/useAuthentication";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");//começa vazio
        //agr vou formar os usuários baseado nos inputs:
        const user = {
            name,
            email,
            password,
            confirmPassword
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        } console.log(user)
        
        const res = await createUser(user);
        console.log(res);
    }

    return (
        <div className="register_container">
            <h1>Cadastre-se agora mesmo!</h1>

            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Digite seu nome."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Digite seu email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Digite sua senha."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Confirme sua senha."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default Register;
