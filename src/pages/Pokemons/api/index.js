import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApi } from "../../../config/mainApi";

const getPokemonsAll = ({ page, limit = 15 }) =>
  mainApi.get(`/products`, {
    params: {
      page,
      limit,
    },
  });

export const getPokemonsThunk = createAsyncThunk(
  "dataFetching/getPokemons",
  async (body, { rejectWithValue }) => {
    try {
      const response = await getPokemonsAll(body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
