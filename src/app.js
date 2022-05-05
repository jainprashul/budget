import React from 'react'
import {createRoot} from 'react-dom/client'
import 'normalize.css'
import './styles/styles.scss'
import AppRoutes from './routers/AppRoutes'

import { Provider } from 'react-redux'
import store from './redux/store'


console.log(store.getState()); 

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)
