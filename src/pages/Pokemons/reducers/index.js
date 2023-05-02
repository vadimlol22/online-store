import { createSlice } from "@reduxjs/toolkit";

import { getPokemonsThunk } from "../api";

const initialState = {
  data: [],
  isLoading: false,
  errors: [],
};

const dataFetchingSlice = createSlice({
  name: "dataFetching",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errors = null;
    });
    builder.addCase(getPokemonsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default dataFetchingSlice.reducer;
