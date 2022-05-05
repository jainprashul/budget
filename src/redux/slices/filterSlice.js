import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const filterState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterState,
    reducers: {
        setTextFilter: (state, action) => {
            state.text = action.payload;
        },
        sortByDate: (state) => {
            state.sortBy = 'date';
        },
        sortByAmount: (state) => {
            state.sortBy = 'amount';
        },
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        }
    }
});

export const { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } = filterSlice.actions;

export default filterSlice.reducer;