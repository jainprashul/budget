import { createSlice, nanoid } from "@reduxjs/toolkit";
import { push, ref, update, remove } from "firebase/database";
import { database, readData } from "../../services/firebase";


export const addExpense = (expense = {}) => {
    return (dispatch, getState) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = moment(0).valueOf()
        } = expense;

        const expens = { description, note, amount, createdAt };

        const expenseRef = ref(database, "expenses");

        push(expenseRef, expens).then((res) => {

            dispatch(add({
                ...expens,
                id: res.key
            }));
            console.log('val', res);

        });
    }
};

export const editExpense = (id, updates) => {
    return (dispatch, getState) => {
        const _ref = ref(database, `expenses/${id}`);
        update(_ref, updates).then(() => {
            console.log('val', updates);
            dispatch(edit({ id, updates }));
            console.log('Expense updated successfully', getState());
        });
    }
};

export const removeExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const _ref = ref(database, `expenses/${id}`);
        remove(_ref).then(() => {
            dispatch(removeAction(id));
            console.log('Expense removed successfully', getState().expense);
        });
    }
};

export const fetchExpenses = () => {
    return (dispatch, getState) => {
        readData('expenses').then((docs) => {
            const expenses = [];
            docs.forEach((doc) => {
                expenses.push({
                    id: doc.key,
                    ...doc.val()
                });
            });
            dispatch(fetch(expenses));
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
            const { id, updates } = action.payload;
            const expense = state.find(({ id: _id }) => _id === id);
            const index = state.indexOf(expense);
            state[index] = { ...expense, ...updates };
        },
            
        fetch: (state, action) => {
            return action.payload;
        }

    }
});

// Actions 
// {type: 'expense/add' }

export const { add, edit, remove: removeAction, fetch } = expenseSlice.actions;
export default expenseSlice.reducer;

