import { push, ref, update, remove } from "firebase/database";
import { database, readData } from "../../services/firebase";

export const db = {
    addToExpense: async (expense = {}) => {
        try {
            const {
                description = '',
                note = '',
                amount = 0,
                createdAt = moment(0).valueOf()
            } = expense;

            const expens = { description, note, amount, createdAt };

            const expenseRef = ref(database, "expenses");

            const res =  await push(expenseRef, expens)

            return {
                ...expens,
                id: res.key
            }

        } catch (error) {
            console.error(error);
        }
    },

    editToExpense: async (id, updates) => {
        try {
            const _ref = ref(database, `expenses/${id}`);
            return await update(_ref, updates)
        } catch (error) {
            console.error(error);
        }
    },


    removeToExpense: async ({ id } = {}) => {
        try {
            const _ref = ref(database, `expenses/${id}`);
            return await remove(_ref)
        } catch (error) {
            console.error(error);
        }
    },

    fetchExpenses: async () => {
        try {
            const docs = await readData('expenses');
            const expenses = [];
            docs.forEach((doc) => {
                expenses.push({
                    id: doc.key,
                    ...doc.val()
                });
            });
            return expenses;
        } catch (error) {
            console.error(error);
        }
    }
}