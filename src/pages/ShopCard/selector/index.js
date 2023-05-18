import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.shopCard;

export const cardItemsSelector = createSelector(
  baseSelector,
  (card) => card.items
);

export const totalPriceSelector = createSelector(
  baseSelector,
  (card) => card.totalPrice
);

export const cardItemsQuantitySelector = createSelector(
  baseSelector,
  (card) => card.quantity
);

export const cardErrorsSelector = createSelector(
  baseSelector,
  (card) => card.errors
);

export const cardLoadingSelector = createSelector(
  baseSelector,
  (card) => card.isLoading
);

export const allPokemonsCardSelector = createSelector(
  cardItemsSelector,
  (items) => {
    return items.reduce((result, { quantity }) => result + quantity, 0);
  }
);
