import React, { useState } from 'react'

const AddExpense = () => {
  return (
    <div>
        <h1>Add Expense</h1>
        <Form />
    </div>
  )
}

const Form = () => {
    const [expense, setExpense] = useState({
        description: '',
        note: '',
        amount: '',
        createdAt: Date.now()
    })

    const { description, note, amount, createdAt } = expense

    const onChange = (e) => {
        const { name, value } = e.target
        setExpense({
            ...expense,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(expense)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Description" name='description' autoFocus value={description} onChange={onChange} />
            <input type="number" placeholder="Amount" name='amount' value={amount} onChange={onChange} />
            <input type="text" placeholder="Note" name='note' value={note} onChange={onChange} />
            {/* <input type="date" placeholder="Date" value={createdAt} onChange={onChange} /> */}
            <input type="submit" value="Submit" />

        </form>
    )
}


export default AddExpense