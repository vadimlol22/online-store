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
import { deleteItemThunk } from "../../pages/ShopCard/api/thunk/deleteItem";
import { clearAllCardThunk } from "../../pages/ShopCard/api/thunk/clearAllCardThunk";

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

  const deleteIteminCard = useCallback(
    (id) => {
      dispatch(deleteItemThunk(id));
    },
    [dispatch]
  );

  const clearAllCard = useCallback (
     (items) => {
      const promises = items.map(({ id }) => dispatch(deleteItemThunk(id)));
      dispatch(clearAllCardThunk(promises));
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
    deleteIteminCard,
    clearAllCard
  };
};

export default useCard;
