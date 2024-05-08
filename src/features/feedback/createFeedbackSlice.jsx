import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedbacksService from "../../services/feedback.service";

const initialState = {
  feedback: [],
  loading: false,
  error: null,
};



// create feedback

export const createfeedback = createAsyncThunk(
  "feedback/create",
  async ({ questionId, names, email, feedback }, { rejectWithValue }) => {
    try {
      const feedbak = { names, email, feedback };
      const response = await feedbacksService.create(questionId, feedbak);
      return response.data?.data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ||
          "An error occurred Check Your Internet Connection"
      );
    }
  }
);

export const CreatefeedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createfeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(createfeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
        state.error = null;
      })
      .addCase(createfeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectGetAllfeedback = (state) => state.feedback.feedback;
export const seleteGetfeedbackStatus = (state) => state.feedback.loading;
export const selectGetfeedbackError = (state) => state.feedback.error;
export default CreatefeedbackSlice.reducer;
