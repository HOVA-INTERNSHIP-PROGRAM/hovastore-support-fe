import { configureStore } from "@reduxjs/toolkit";
import solutionsReducer from "./features/solutions/getAllSolutionsSlice";

const store = configureStore({
    reducer: {
        solutions: solutionsReducer,
    },
});

export default store;