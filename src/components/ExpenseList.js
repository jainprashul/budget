import React from 'react'
import { useSelector } from 'react-redux'
import getVisibileExpenses from '../redux/selectors/expenses'
import AddExpense from './AddExpense'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

    const expenses = useSelector(state => getVisibileExpenses(state.expense, state.filter))
    return (
        <div>
            <h1>Expense List</h1>
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