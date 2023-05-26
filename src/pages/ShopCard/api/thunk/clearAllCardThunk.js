import { createAsyncThunk } from "@reduxjs/toolkit";

export const clearAllCardThunk = createAsyncThunk(
  "card/ClearCard",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Promise.all(payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
