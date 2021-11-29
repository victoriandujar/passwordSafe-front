import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { Container } from './styles';

import PasswordSafe from '../../assets/pass.svg';

import { createUser } from '../../store/fetchActions';
import { Link } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [masterPassword, setMasterPassword] = useState('');
    const [namePass, setNamePass] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const formValue = {
        name: name,
        email: email,
        masterPassword: masterPassword,
        password: {
            name: namePass,
            password: password
        }
    }

    function submitForm(e) {
		e.preventDefault();

		dispatch(createUser(formValue));
	}

    return (
       <Container>
           <div className="title">
                <img src={PasswordSafe} alt="" width="50px" />
                <h1>Sign Up.</h1>
            </div>
           <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Usuário"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email"
                    name="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    name="masterPassword" 
                    placeholder="Senha" 
                    value={masterPassword}
                    onChange={(e) => setMasterPassword(e.target.value)}
                />
                <h4>Cadastrar Senha </h4>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nome da senha"
                    value={namePass}
                    onChange={(e) => setNamePass(e.target.value)}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>

                <div className="link">
                    <Link to="/">Já tem conta? <b>Faça o login </b></Link>
                </div>
            </form>
       </Container>
    )
}

export default SignUp;