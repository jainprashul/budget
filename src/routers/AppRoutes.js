import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Help from '../components/Help'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/edit/:id" element={<Edit/>} />
                <Route path='/help' element={<Help/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes