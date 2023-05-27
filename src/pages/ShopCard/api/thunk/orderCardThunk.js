import { createAsyncThunk } from "@reduxjs/toolkit";

import CardService from "../CardApiService";

export const orderCardThunk = createAsyncThunk(
  "card/orderCard",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CardService.order(payload);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

