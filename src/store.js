import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import feedbacksReducer from "./features/feedback/feeedbackSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
        sidebar: sidebarReducer,
        feedbacks: feedbacksReducer
    },
});

export default store;