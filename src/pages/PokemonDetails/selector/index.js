import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonDetails;

export const isPokemonDetailsLoadingSelector = createSelector(
  baseSelector,
  (details) => details.isLoading
);

export const pokemonIdSelector = createSelector(
  baseSelector,
  (details) => details.id
);

export const pokemonNameSelector = createSelector(
  baseSelector,
  (details) => details.name
);

export const pokemonImgSelector = createSelector(
  baseSelector,
  (details) => details.img
);

export const pokemonAbilitiesSelector = createSelector(
  baseSelector,
  (details) => details.abilities
);

export const pokemonStatsSelector = createSelector(
  baseSelector,
  (details) => details.stats
);

export const pokemonPriceSelector = createSelector(
  baseSelector,
  (details) => details.price
);

export const pokemonError = createSelector(
  baseSelector,
  (details) => details.errors
);
