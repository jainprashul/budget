import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenseSlice";
import filterReducer from "../slices/filterSlice";  
import createSagaMiddleware from 'redux-saga'
import expenseSaga from "../saga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        expense : expenseReducer,
        filter : filterReducer,
    },
    middleware: [saga],
    devTools: true
})

saga.run(expenseSaga);
export default store;

