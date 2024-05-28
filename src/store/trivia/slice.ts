import { createSlice } from "@reduxjs/toolkit"

export const triviaSlice = createSlice({
    name: "trivia",
    initialState: {
        questions: [],
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
    },
})

export const {  setQuestions } = triviaSlice.actions;

export default triviaSlice.reducer;