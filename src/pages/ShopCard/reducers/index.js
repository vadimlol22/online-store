import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunk/getItems";
import { addItemThunk } from "../api/thunk/addItem";
import { updateItemThunk } from "../api/thunk/updateItem";
import { deleteItemThunk } from "../api/thunk/deleteItem";

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
      state.errors = null;
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
      state.errors = null;
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

    builder.addCase(updateItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(updateItemThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = null;

      const { cartState, updatedItem } = payload;

      const foundItem = state.items.find((item) => item.id === updatedItem.id);

      foundItem.quantity = updatedItem.quantity;
      state.totalPrice = cartState.totalPrice;
    });
    builder.addCase(updateItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(deleteItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(deleteItemThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = null;

      const { cartState, removedItemId } = payload;

      const foundItem = state.items.findIndex((item) => item.id === removedItemId);
      state.items.splice(foundItem, 1)

      state.totalPrice = cartState.totalPrice;
      state.quantity = cartState.quantity;
    });
    builder.addCase(deleteItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default cardSlice.reducer;
