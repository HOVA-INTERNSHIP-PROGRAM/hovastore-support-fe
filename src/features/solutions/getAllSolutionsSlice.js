import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../axiosInstance"

export const getAllSolutions = createAsyncThunk("solutions/get", async (query) => {
    try {
        const response = await http.get(`/solutions`);
        return response;
    } catch (err) {
        if (!err.response) {
            throw err;
        }
        Promise.reject(err.response);
    }
})

export const getAllSolutionsSlice = createSlice({
    name: "getAllSolutions",
    initialState: {},
    reducers: {},
})

export const selectGetAllSolutions = (state) => state.getAllSolutions;
export default getAllSolutionsSlice.reducer;
export const getAllSolutionsReducer = getAllSolutionsSlice.reducer;
