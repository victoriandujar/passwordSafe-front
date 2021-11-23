import api from '../../services/api';

import { login } from '../modules/auth';
import { addMessage } from '../modules/layout';

export const authLogin = (user) => {
	return (dispatch) => {
		api
			.post('/login', user)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				dispatch(login());
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch(addMessage(message));
			});
	};
};