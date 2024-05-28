import { createSlice } from "@reduxjs/toolkit";

export const chuckSlice = createSlice({
    name: "chuck",
    initialState: {
        jokes: [],
    },
    reducers: {
        setJokes: (state, action) => {
            state.jokes = action.payload
        },
    },
})

export const { setJokes } = chuckSlice.actions

export default chuckSlice.reducer;