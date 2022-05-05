import moment from 'moment'
import React, { useState } from 'react'
import { DateRangePicker } from 'react-dates'
import { useDispatch, useSelector } from 'react-redux'
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../redux/slices/filterSlice'

const ExpenseFilter = () => {
    const filter = useSelector(state => state.filter)
    console.log(filter);
    const [calendarFocused, setCalendarFocused] = useState(false)
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

        <DateRangePicker
            startDate={moment(filter.startDate)}
            endDate={moment(filter.endDate)}
            onDatesChange={({ startDate, endDate }) => {
                dispatch(setStartDate(startDate.valueOf()));
                dispatch(setEndDate(endDate.valueOf()));
            }}
            focusedInput={calendarFocused}
            onFocusChange={focusedInput => setCalendarFocused(focusedInput)}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />

    </div>
  )
}

export default ExpenseFilter