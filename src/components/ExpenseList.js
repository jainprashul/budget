import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getVisibileExpenses from '../redux/selectors/expenses'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

    const dispatch = useDispatch();


    const expenses = useSelector(state => {
        return getVisibileExpenses(state.expense, state.filter);
    })

    return (
        <div>
            <h5>Expense List</h5>
            <ExpenseFilter />

            <br />
            Length : {expenses.length}
            <br />

            {expenses.map(expense => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}




        </div>
    )
}

export default ExpenseList