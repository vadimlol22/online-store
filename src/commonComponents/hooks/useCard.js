import { useDispatch, useSelector } from "react-redux";
import {
  allPokemonsCardSelector,
  cardItemsQuantitySelector,
  cardItemsSelector,
  totalPriceSelector,
} from "../../pages/ShopCard/selector";
import { useCallback } from "react";
import { getItemsThunk } from "../../pages/ShopCard/api/thunk/getItems";
import { addItemThunk } from "../../pages/ShopCard/api/thunk/addItem";
import { updateItemThunk } from "../../pages/ShopCard/api/thunk/updateItem";

const useCard = () => {
  const dispatch = useDispatch();

  const cardItems = useSelector(cardItemsSelector);
  const cardItemsQuantity = useSelector(cardItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);
  const allPokeInCard = useSelector(allPokemonsCardSelector);

  const getCardData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCard = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  const updateItemQuantity = useCallback(
    (payload) => {
      dispatch(updateItemThunk(payload));
    },
    [dispatch]
  );

  return {
    cardItems,
    cardItemsQuantity,
    totalPrice,
    allPokeInCard,
    getCardData,
    addItemToCard,
    updateItemQuantity,
  };
};

export default useCard;
