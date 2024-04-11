import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Bookservice from "../../services/solution.service";

const initialState = {
    books: [],
    loading: false,
    error: null,
}

export const getAllBooks = createAsyncThunk(
    "books/get",
    async () => {
        try {
            const response = await Bookservice.getAll();
            return response.data?.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            Promise.reject(err.response);
        }
    })

export const getAllBooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
                state.error = null;
            })
            .addCase(getAllBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export const selectGetAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.loading;
export const getBooksError = (state) => state.books.error;
export default getAllBooksSlice.reducer;

