const expenseState = [{
    id: '1',
    description: 'Redux Course' ,
    note: '',
    amount: 1950,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 5000,
    createdAt: -3000
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: 9000
}
];

/**
 * 
 * @param {*} state 
 * @param {*} action - ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE
 * @returns 
 */
const expenseReducer = (state = expenseState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
            
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates,
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

export default expenseReducer;