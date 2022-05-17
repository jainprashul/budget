import { createSlice, nanoid } from "@reduxjs/toolkit";
import { push, ref, update, remove } from "firebase/database";
import { database, readData } from "../../services/firebase";
import { db } from "../apis"; 


export const addExpense = (expense = {}) => {
    return (dispatch, getState) => {
        db.addToExpense(expense).then((res)=> {
            dispatch(add(res));
            console.log("added", res.id, res);
        });
    }
};

export const editExpense = (id, updates) => {
    return (dispatch, getState) => {
        db.editToExpense(id, updates).then((res)=> {
            dispatch(edit({id, updates}));
            console.log('Expense updated successfully', id,  getState());
        });
    }
};

export const removeExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        db.removeToExpense({ id }).then((res)=> {
            dispatch(removeAction(id));
            console.log('Expense removed successfully', id,  getState());
        });
    }
};

export const fetchExpenses = () => {
    return (dispatch, getState) => {
        db.fetchExpenses().then((res)=> {
            dispatch(fetchDone(res));
            console.log('Expenses fetched successfully', getState());
        });
    }
};



export const expenseSlice = createSlice({
    name: 'expense',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter(({ id }) => id !== action.payload);
        },
        edit: (state, action) => {
            console.log('edit', action);
            const { id, updates } = action.payload;
            const expense = state.find(({ id: _id }) => _id === id);
            const index = state.indexOf(expense); 
            state[index] = { ...expense, ...updates };
        },

        fetch : (state, action) => {
        },
            
        fetchDone: (state, action) => {
            return action.payload;
        }

    }
});

// Actions 
// {type: 'expense/add', 'expense/edit', 'expense/remove', 'expense/fetch'}

export const { add, edit, remove: removeAction, fetch , fetchDone} = expenseSlice.actions;
export default expenseSlice.reducer;