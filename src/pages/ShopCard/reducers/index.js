import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunk/getItems";
import { addItemThunk } from "../api/thunk/addItem";

const initialState = {
  items: [],
  totalPrice: 0,
  quantity: 0,
  errors: null,
  isLoading: false,
};

const cardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getItemsThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;

      state.isLoading = false;
      state.items = itemsList;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.errors = null;
    });
    builder.addCase(getItemsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(addItemThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addItemThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;

      state.isLoading = false;
      state.items = itemsList;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.errors = null;
    });
    builder.addCase(addItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default cardSlice.reducer;
