import { createAsyncThunk } from "@reduxjs/toolkit";

import CardService from "../CardApiService";

export const deleteItemThunk = createAsyncThunk(
  "card/deleteItem",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CardService.deleteItem(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
