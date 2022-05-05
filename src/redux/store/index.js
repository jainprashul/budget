import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../slices/expenseSlice";
import filterReducer from "../slices/filterSlice";  


const store = configureStore({
    reducer: {
        expense : expenseReducer,
        filter : filterReducer,

    },
    devTools: true
})

export default store;

