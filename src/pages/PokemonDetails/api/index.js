import { createAsyncThunk } from "@reduxjs/toolkit";
// import pick from "lodash/pick";

import { mainApi } from "../../../config/mainApi";

const getPokemonById = (id) => mainApi.get(`products/${id}`);

export const getPokemonDetailsThunk = createAsyncThunk(
  "pokemonDetails/getDetailsById",
  async (id) => {
    const response = await getPokemonById(id);

    return response.data;
  }
);
