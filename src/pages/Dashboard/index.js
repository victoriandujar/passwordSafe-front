import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import UsersList from '../../components/Users';

import { Container } from './styles';

function Dashboard() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate('/');
        }
    }, [navigate, token])

    return (
        <Container>
            {token ? <UsersList /> : ''}
        </Container>
    )
}

export default Dashboard;
