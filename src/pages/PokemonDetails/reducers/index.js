import { createSlice } from "@reduxjs/toolkit";

import { getPokemonDetailsThunk } from "../api";

const initialState = {
  isLoading: false,
  errors: null,
  id: null,
  name: "",
  img: "",
  abilities: [],
  stats: [],
  price: null,
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetailsThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.id = payload.id;
      state.name = payload.name;
      state.img = payload.image;
      state.abilities = payload.abilities;
      state.stats = payload.stats;
      state.price = payload.price;
    });
    builder.addCase(getPokemonDetailsThunk.rejected, (state, { error }) => {
      state.isLoading = false;
      state.errors = error;
    });
  },
});

export default pokemonDetailsSlice.reducer;
