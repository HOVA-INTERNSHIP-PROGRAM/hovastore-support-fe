import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/solutions/booksSlice";
import questionReducer from "./features/question/questionSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import getFeedbackReducer from "./features/feedback/getFeedbackSlice";
import createFeedbackReducer from "./features/feedback/createFeedbackSlice";
import loginReducer from "./features/auth/loginSlice";
import logoutReducer from "./features/auth/logoutSlice";
const store = configureStore({
    reducer: {
        books: booksReducer,
        questions: questionReducer,
        sidebar: sidebarReducer,
        feedbacks: getFeedbackReducer,
        feedback: createFeedbackReducer,
        login: loginReducer,
        logout: logoutReducer,

    },
});

export default store;