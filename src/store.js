import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
        sidebar: sidebarReducer
    },
});

export default store;