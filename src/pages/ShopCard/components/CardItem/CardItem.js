import styles from "./styles.module.scss";

import trash from "./../../../../static/images/trash.png";
import AlertDialog from "../Dialog/Dialog";

const CardItem = ({ id, name, image, quantity, price, updateItemQuantity }) => {
  const total = price * quantity;

  //   const handleSubtractionQuantity = () => {
  //     if (quantity > 1) {
  //       updateItemQuantity({ id, quantity: quantity - 1 });
  //     } else {
  //       <AlertDialog boolo="true" />;
  //     }
  //   };

  return (
    <div className={styles.item}>
      <img className={styles.item__image} src={image} alt={name} />
      <div className={styles.item__about}>
        <h3>{name}</h3>
        <p>ID: {id}</p>
      </div>
      <div className={styles.item__price}>${price}</div>
      <div className={styles.item__quantity}>
        <button
          disabled={quantity === 1}
          onClick={() => updateItemQuantity({ id, quantity: quantity - 1 })}
          //   onClick={handleSubtractionQuantity}
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => updateItemQuantity({ id, quantity: quantity + 1 })}
        >
          +
        </button>
      </div>
      <div className={styles.item__total}>${total}</div>
      <button className={styles.item__trash}>
        <AlertDialog
          content={<img src={trash} alt="trash" />}
          text="Are you sure you want to remove this item?"
        />
      </button>
    </div>
  );
};

export default CardItem;
