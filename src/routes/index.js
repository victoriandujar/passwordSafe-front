import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewPassword from '../pages/NewPassword';
import NewUser from '../pages/NewUser';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createPassword" element={<NewPassword />} />
                <Route path="/newUser" element={<NewUser />} />
            </Routes>
        </BrowserRouter>
    )
}
