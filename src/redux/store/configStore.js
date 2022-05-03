import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expense";
import filterReducer from "../reducers/filters";


const store = configureStore({
    reducer: {
        expense : expenseReducer,
        filter : filterReducer,

    },
    devTools: true
})

export default store;

