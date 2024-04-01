import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import solutionService from "../../services/solution.service";


const initialState = {
    solutions: [],
    status: "idle",
    error: null
}

export const getAllSolutions = createAsyncThunk(
    "solutions/get",
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
    name: "solutions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSolutions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllSolutions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.solutions = action.payload;
            })
            .addCase(getAllSolutions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export const selectGetAllSolutions = (state) => state.solutions.solutions;
export const getSolutionsStatus = (state) => state.solutions.status;
export const getSolutionsError = (state) => state.solutions.error;
export default getAllSolutionsSlice.reducer;

