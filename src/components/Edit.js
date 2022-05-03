import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { editExpense } from '../redux/actions/expense'
import { ExpenseForm } from './AddExpense'

const Edit = (prop) => {
  const params = useParams()
  const expense = useSelector(state => state.expense.find(expense => expense.id === params.id))
  const dispatch = useDispatch()

  
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm expense={expense} onSubmit={(expense) => {

        dispatch(editExpense(params.id, expense))
        
      }} />
    </div>
  )
}

export default Edit