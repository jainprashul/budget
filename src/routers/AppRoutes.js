import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Help from '../components/Help'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import { fetchExpenses } from '../redux/slices/expenseSlice'

const AppRoutes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchExpenses())
    }, [dispatch])

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