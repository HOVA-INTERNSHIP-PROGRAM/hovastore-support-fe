import { configureStore } from "@reduxjs/toolkit";
import getAllSolutionsReducer from "./features/solutions/getAllSolutionsSlice";

const reducer = {
    getAllSolutions: getAllSolutionsReducer
}

export default configureStore({
    reducer,
});
