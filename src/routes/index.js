import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
