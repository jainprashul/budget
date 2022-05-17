import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { db } from '../apis';
import { add, fetch, fetchDone } from '../slices/expenseSlice';

// {type: 'expense/add', 'expense/edit', 'expense/remove', 'expense/fetch'}
function* addExpense(expense) {
    console.log('adding expense', expense);
    yield call(db.addToExpense(expense));
}

function* editExpense(id, updates) {
    console.log('editing expense', id, updates);
    yield call(db.editToExpense(id, updates));
}

function* removeExpense({id}={}) {
    console.log('removing expense', id);
    yield call(db.removeToExpense({id}));
}

function* fetchExpenses() {
    const res = yield call(db.fetchExpenses);
    yield put(fetchDone(res));
}

function* expenseSaga() { 
    yield takeLatest('expense/add', addExpense);
    yield takeEvery('expense/edit', editExpense);
    yield takeEvery('expense/remove', removeExpense);
    yield takeLatest('expense/fetch', fetchExpenses);
}

export default expenseSaga;