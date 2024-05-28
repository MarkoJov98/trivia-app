import { configureStore } from "@reduxjs/toolkit";
import chuckReducer from "./chuck/slice"
import triviaReducer from "./trivia/slice"

export default configureStore({
   reducer: {
    chuck: chuckReducer,
    trivia: triviaReducer,
   }
});