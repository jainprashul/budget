import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'normalize.css'
import './styles/styles.scss'
import AppRoutes from './routers/AppRoutes'
import store from './redux/store/configStore'
import { Provider } from 'react-redux'


console.log(store.getState());

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)
