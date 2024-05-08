import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  isAdmin: false,
};



export const logout = createAsyncThunk(
  "login/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("token");
      return true;
    } catch (error) {
      return rejectWithValue("Failed to logout.");
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.userData = null;
        state.loading = false;
        state.error = null;
        state.isAuthenticated = false;
        state.isAdmin = false;
      })

  },
});

// Selectors
export const selectLoginStatus = (state) => state.login.loading;
export const selectLoginError = (state) => state.login.error;
export const getIsAuthenticated = (state) => state.login.isAuthenticated;
export const getIsAdmin = (state) => state.login.isAdmin;

export default loginSlice.reducer;
