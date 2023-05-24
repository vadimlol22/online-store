import { createAsyncThunk } from "@reduxjs/toolkit";

import CardService from "../CardApiService";

export const addItemThunk = createAsyncThunk(
  "card/addItems",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CardService.addItem(payload);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
