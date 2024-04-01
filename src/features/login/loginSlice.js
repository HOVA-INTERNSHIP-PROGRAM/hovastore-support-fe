import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../../services/login.service";

const initialState = {
    userData: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

export const makeLogin = createAsyncThunk(
    "login/auth",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await loginService.login({ email, password });
            return response.data?.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(makeLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(makeLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(makeLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to login';
                state.isAuthenticated = false;
            });
    },
});

// Selectors
export const getLoginStatus = (state) => state.login.loading;
export const getLoginError = (state) => state.login.error;
export const getIsAuthenticated = (state) => state.login.isAuthenticated;

export default loginSlice.reducer;
