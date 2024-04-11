import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
    },
});

export default store;