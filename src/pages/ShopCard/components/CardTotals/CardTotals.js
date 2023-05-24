import AlertDialog from "../Dialog/Dialog";
import styles from "./styles.module.scss";

const CardTotals = ({ cardItemsQuantity, totalPrice, allPokeInCard }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Cart Totals</h3>
      <div className={styles.wrapper__info}>
        <div className={styles.wrapper__info__field}>
          <h4>Unique Pokémons</h4>
          <p>{cardItemsQuantity}</p>
        </div>
        <div className={styles.wrapper__info__field}>
          <h4>Total Pokémons</h4>
          <p>{allPokeInCard}</p>
        </div>
        <div className={styles.wrapper__info__total}>
          <h4>Total</h4>
          <p>${totalPrice}</p>
        </div>
      </div>
      <button className={styles.wrapper__buy}>BUY</button>
      <button className={styles.wrapper__empty}>
        <AlertDialog
          content="Empty Shopping Cart"
          text="Are you sure you want to empty the shopping cart?"
        />
      </button>
    </div>
  );
};

export default CardTotals;
