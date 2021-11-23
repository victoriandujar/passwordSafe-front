import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { authLogin } from '../../store/fetchActions';

import { Container } from './styles';

function Login() {
    const [ form, setForm ] = useState({ username: '', password: '' });

    const dispatch = useDispatch();

    function changeForm(e) {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	}

    function submitForm(e) {
		e.preventDefault();

		dispatch(authLogin(form));

		setForm({ username: '', password: '' });
	}

    return (
        <Container>
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Usuário"
                    onChange={changeForm} 
                    value={form.username}
                />
                <input 
                    type="password"
                    name="password" 
                    placeholder="Senha" 
                    onChange={changeForm}
                    value={form.password}
                />

                <button type="submit">Login</button>
            </form>
        </Container>
    )
}

export default Login;