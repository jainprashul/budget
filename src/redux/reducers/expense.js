const expenseState = [];

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