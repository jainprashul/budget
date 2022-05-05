import moment from "moment";

const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const currentDate = moment(expense.createdAt);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(currentDate, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(currentDate, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

export default getVisibileExpenses;