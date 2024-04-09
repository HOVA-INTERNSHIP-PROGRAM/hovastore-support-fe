import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";
import loginReducer from "./features/login/loginSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
        login: loginReducer,
    },
});

export default store;