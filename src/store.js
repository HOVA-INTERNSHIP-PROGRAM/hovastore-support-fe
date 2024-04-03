import { configureStore } from "@reduxjs/toolkit";
import solutionsReducer from "./features/solutions/getAllSolutionsSlice";

const store = configureStore({
    reducer: {
        books: solutionsReducer,
    },
});

export default store;