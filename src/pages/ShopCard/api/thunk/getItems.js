import { createAsyncThunk } from "@reduxjs/toolkit";

import CardService from "../CardApiService";

export const getItemsThunk = createAsyncThunk(
  "card/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CardService.getItems();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
