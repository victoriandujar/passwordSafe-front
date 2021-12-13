import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { authLogin } from '../../store/fetchActions';

import PasswordSafe from '../../assets/pass.svg';

import { Container } from './styles';

function Login() {
    const [ form, setForm ] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function changeForm(e) {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	}

    function submitForm(e) {
		e.preventDefault();

		dispatch(authLogin(form)).then(() => {
           const token = localStorage.getItem('token');

           if(token) {
            navigate('/dashboard');
           }
        });

		setForm({ username: '', password: '' });
	}

    return (
        <Container>
            <div className="title">
                <img src={PasswordSafe} alt="" width="50px" />
                <h3>Login.</h3>
                <h1>Welcome Back!</h1>
            </div>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Usuário"
                        onChange={changeForm} 
                        value={form.username}
                        className="color-input"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Senha" 
                        onChange={changeForm}
                        value={form.password}
                        className="color-input"
                    />
                </div>
                <button type="submit">Login</button>

                <div className="link">
                    <Link to="/signUp">Ainda não tem conta? <b>Cadastre-se agora!</b></Link>
                </div>
            </form>
        </Container>
    )
}

export default Login;