import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import solutionService from "../../services/solution.service";

const initialState = {
    books: [],
    loading: false,
    error: null,
}

export const getAllSolutions = createAsyncThunk(
    "books/get",
    async () => {
        try {
            const response = await solutionService.getAll();
            return response.data?.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            Promise.reject(err.response);
        }
    })

export const getAllSolutionsSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSolutions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllSolutions.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
                state.error = null;
            })
            .addCase(getAllSolutions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export const selectGetAllSolutions = (state) => state.books.books;
export const getSolutionsStatus = (state) => state.books.loading;
export const getSolutionsError = (state) => state.books.error;
export default getAllSolutionsSlice.reducer;

