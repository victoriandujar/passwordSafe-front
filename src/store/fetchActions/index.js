/* eslint-disable no-lone-blocks */
import { message } from 'antd';

import api from '../../services/api';

import { login, signUp } from '../modules/auth';
import { addMessage } from '../modules/layout';

export const authLogin = (user) => {
	return (dispatch) => {
		return api
			.post('/login', user)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				dispatch(login());
				message.success(`Login realizado com sucesso! ${res.data.name} - ${res.data.autorizacao}`);
			})
			.catch((error) => {
				message.error('Não foi possível realizar o login');
				
				if(error.response?.status === 401) {
					message.error('Você excedeu tentativas máximas de login.');
				}
			});
	};
};

export const createUser = (user) => {
	return (dispatch) => {
		api
			.post('/users', user)
			.then((res) => {
				dispatch(signUp());
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch(addMessage(message));
			});
	};
};