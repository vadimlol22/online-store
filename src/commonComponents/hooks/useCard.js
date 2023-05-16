import { useDispatch, useSelector } from "react-redux";
import {
  cardItemsQuantitySelector,
  cardItemsSelector,
  totalPriceSelector,
} from "../../pages/ShopCard/selector";
import { useCallback } from "react";
import { getItemsThunk } from "../../pages/ShopCard/api/thunk/getItems";
import { addItemThunk } from "../../pages/ShopCard/api/thunk/addItem";

const useCard = () => {
  const dispatch = useDispatch();

  const cardItems = useSelector(cardItemsSelector);
  const cardItemsQuantity = useSelector(cardItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);

  const getCardData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCard = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  return {
    cardItems,
    cardItemsQuantity,
    totalPrice,
    getCardData,
    addItemToCard,
  };
};

export default useCard;
