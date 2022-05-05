import moment from 'moment'
import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import { useDispatch } from 'react-redux'
import { useNavigate, useRoutes } from 'react-router-dom'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { addExpense } from '../redux/slices/expenseSlice'

const AddExpense = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={(expense => {
                dispatch(addExpense(expense))
            })} />
        </div>
    )
}

export const ExpenseForm = ({ onSubmit, expense : data }) => {
    
    const [expense, setExpense] = useState({
        description:  data ? data.description : '',
        note: data ? data.note : '',
        amount: data ? data.amount : 0,
        createdAt: data ? moment(data.createdAt) : moment()
    })

    const router = useNavigate()

    const [calendarFocused, setCalendarFocused] = useState(false)

    const { description, note, amount, createdAt } = expense

    const onChange = (e) => {
        const { name, value } = e.target
        setExpense({
            ...expense,
            [name]: value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (description === '' || amount === 0) {
            return alert('Please fill in all fields')
        }

        onSubmit({
            description: expense.description,
            note: expense.note,
            amount: parseFloat(expense.amount),
            createdAt: expense.createdAt.valueOf()
        })

        router('/', {
            state: {
                message: 'Expense added successfully'
            }
        })

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Description" name='description' autoFocus value={description} onChange={onChange} />
            <input type="number" placeholder="Amount" name='amount' value={amount} onChange={onChange} />
            {/* <input type='date' name='createdAt' value={createdAt.format("YYYY-MM-DD")} onChange={e => {
                setExpense({
                    ...expense,
                    createdAt: moment(e.target.value)
                })
            }} /> */}
            <SingleDatePicker 
            date={createdAt} 
            onDateChange={date => setExpense({...expense, createdAt: date})}
            focused={calendarFocused}
            onFocusChange={({ focused }) => setCalendarFocused(focused)}
            numberOfMonths={1}
            isOutsideRange={() => false}
             />
            <textarea placeholder="Note" name='note' value={note} onChange={onChange} />
            {/* <input type="date" placeholder="Date" value={createdAt} onChange={onChange} /> */}
            <input type="submit" value="Submit" />

        </form>
    )
}


export default AddExpense