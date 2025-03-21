// src/pages/Login.tsx
import React, { useState } from 'react';
import '../login.css';
import {login} from "../api/api.tsx";
import {useNavigate} from "react-router-dom";

export interface ILogin {
    login: string;
    password: string;
}

const Login: React.FC = () => {
    // State for login data
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<ILogin>({ login: '', password: '' });
    const [error, setError] = useState<string | null>(null);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Reset error before each submission
        console.log(loginData);
        try {
            const response = await login(loginData); // API login function call
            console.log('Login successful', response);
            navigate('/admin/categories');
            // After successful login, you can handle things like redirecting or storing tokens
        } catch (err) {
            setError('Неверный логин или пароль'); // Error handling for failed login
        }
    };

    return (
        <div className="form">
            <div className="form__header">
                <h2>Вход</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form__body">
                    <div className="input__container">
                        <label htmlFor="login">Логин</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            placeholder="Логин"
                            value={loginData.login}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input__container">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Пароль"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />
                        {error && <p className="error">{error}</p>} {/* Displaying the error */}
                    </div>
                    <button type="submit" className="submit__button">Войти</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
