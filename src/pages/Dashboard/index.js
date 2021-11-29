import React from 'react'
import UsersList from '../../components/Users';

import { Container } from './styles';

function Dashboard() {
    return (
        <Container>
            <p>Dashboard</p>
            <UsersList />
        </Container>
    )
}

export default Dashboard;
