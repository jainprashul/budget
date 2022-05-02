import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTextFilter } from '../redux/actions/fiters'

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

    </div>
  )
}

export default ExpenseFilter