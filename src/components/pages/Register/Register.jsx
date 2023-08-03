import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CustomInput from "../../elements/CustomInput";
import { useAuthentication } from "../../../hooks/useAuthentication";

import "./Register.css";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { logout } = useAuthentication();//função logout está no hook useauthentication. Só importo aqui.


    const { createUser, error: authError, loading } = useAuthentication();
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");//começa vazio
        //agr vou formar os usuários baseado nos inputs:
        const user = {
            displayName,
            email,
            password,
            confirmPassword,
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }
        
        const res = await createUser(user);
        logout();/*como ele autentica assim que cadastro e vai direto pra dashboard, faço o 
        logout logo após cadastrar, e com isso não loga no sistema.*/
    }

    useEffect(() => {//verificará se o erro é o do authError
        if (authError) {
            setError(authError);
        }
    },[authError])

    return (
        <div className="register_container">
            <h1>Cadastre-se agora mesmo!</h1>

            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                
                <CustomInput
                    type="text"
                    name="displayName"
                    required
                    placeholder="Digite seu nome."
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            
               
                <CustomInput
                    type="email"
                    name="email"
                    required
                    placeholder="Digite seu email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <CustomInput
                    type="password"
                    name="password"
                    required
                    placeholder="Digite sua senha."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <CustomInput
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Confirme sua senha."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!loading && <input type="submit" value="Cadastrar" />}
                {loading && (
                        <input type="submit" value="Aguarde..." />
                )}
            </form>
                <h2>ou</h2>
            <Link to="/login"><h2>Faça login</h2></Link>
        </div>
    )
}

export default Register;
