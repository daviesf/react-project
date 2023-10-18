import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        const mockUsername = 'usuario';
        const mockPassword = 'senha';

        if (username === mockUsername && password === mockPassword) {
            setLoggedIn(true);
            navigate('/cinema');
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className="login-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          {loggedIn && <p>Logado com sucesso! Redirecionando para a página de cinema...</p>}
        </div>
      );
    };
    
    export default Login;
    
