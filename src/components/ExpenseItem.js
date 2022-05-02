import React from 'react'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../redux/actions/expense';

const ExpenseItem = ({id ,description , amount, createdAt}) => {
    const dispatch = useDispatch();
  return (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button className="btn btn-danger" onClick={()=> {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
  )
}

export default ExpenseItem