import { createAsyncThunk } from "@reduxjs/toolkit";

import CardService from "../CardApiService";

export const updateItemThunk = createAsyncThunk(
  "card/updateItem",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await CardService.updateItem({
        id: payload.id,
        quantity: payload.quantity,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
