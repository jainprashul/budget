import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeExpense, removeAction } from '../redux/slices/expenseSlice';

const ExpenseItem = ({id ,description , amount, createdAt}) => {
    const dispatch = useDispatch();
  return (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {moment(createdAt).format('l')}</p>
        <button className="btn btn-danger" onClick={()=> {
            dispatch(removeAction({id}))
        }}>Remove</button>
    </div>
  )
}

export default ExpenseItem