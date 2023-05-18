import { useEffect } from "react";

import useCard from "../../../commonComponents/hooks/useCard";
import CardItem from "../components/CardItem/CardItem";
import CardTotals from "../components/CardTotals/CardTotals";

import styles from "./styles.module.scss";

const ShopCardContainer = () => {
  const {
    getCardData,
    updateItemQuantity,
    cardItems,
    cardItemsQuantity,
    totalPrice,
    allPokeInCard,
  } = useCard();

  useEffect(() => {
    getCardData();
  }, [getCardData]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__left}>
          <div className={styles.wrapper__left__header}>
            <p className={styles.wrapper__left__header_1}>Products</p>
            <p className={styles.wrapper__left__header_2}>Price</p>
            <p className={styles.wrapper__left__header_3}>Quantiy</p>
            <p className={styles.wrapper__left__header_4}>Total</p>
          </div>
          {cardItems.map(({ id, name, image, quantity, price }) => (
            <CardItem
              id={id}
              name={name}
              image={image}
              quantity={quantity}
              price={price}
              updateItemQuantity={updateItemQuantity}
            />
          ))}
        </div>
        <div className={styles.wrapper__right}>
          <CardTotals
            cardItemsQuantity={cardItemsQuantity}
            totalPrice={totalPrice}
            allPokeInCard={allPokeInCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCardContainer;
