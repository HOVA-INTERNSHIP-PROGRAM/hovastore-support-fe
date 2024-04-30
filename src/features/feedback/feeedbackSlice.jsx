import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedbacksService from "../../services/feedback.service";

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
};

export const getAllfeedbacks = createAsyncThunk(
  "feedbacks/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await feedbacksService.getAll();
      return response.data?.data;
    } catch (err) {
      return rejectWithValue(
        err.response.data.message ||
          "An error occurred Check Your Internet Connection"
      );
    }
  }
);

// create feedbacks

export const createFeedbacks = createAsyncThunk(
  "feedbacks/create",
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

export const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllfeedbacks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllfeedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload;
        state.error = null;
      })
      .addCase(getAllfeedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createFeedbacks.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFeedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload;
        state.error = null;
      })
      .addCase(createFeedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectGetAllfeedbacks = (state) => state.feedbacks.feedbacks;
export const seleteGetfeedbacksStatus = (state) => state.feedbacks.loading;
export const selectGetfeedbacksError = (state) => state.feedbacks.error;
export default feedbacksSlice.reducer;
