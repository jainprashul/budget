import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../redux/actions/fiters'

const ExpenseFilter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    return (
    <div>
        <input type="text" placeholder="Filter" defaultValue={filter.text} onChange={e=> {
            const text = e.target.value.trim()
            console.log(text)
            // dispatch an action
            dispatch(setTextFilter(text))
        }} />

        <select value={filter.sortBy} onChange={e=> {
            const sortBy = e.target.value
            if (sortBy === 'date') {
                dispatch(sortByDate())
            } else if (sortBy === 'amount') {
                dispatch(sortByAmount())
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>

    </div>
  )
}

export default ExpenseFilter