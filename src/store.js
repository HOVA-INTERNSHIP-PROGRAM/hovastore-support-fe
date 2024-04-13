import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";
import loginReducer from "./features/login/loginSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
        login: loginReducer,
        sidebar: sidebarReducer
    },
});

export default store;