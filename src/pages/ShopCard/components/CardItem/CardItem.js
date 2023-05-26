import styles from "./styles.module.scss";

import trash from "./../../../../static/images/trash.png";
import DeleteItemDialog from "../Dialog/DeleteItemDialog";

import PropTypes from "prop-types";

const CardItem = ({ id, name, image, quantity, price, updateItemQuantity }) => {
  const total = price * quantity;

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
        <DeleteItemDialog
          content={<img src={trash} alt="trash" />}
          text="Are you sure you want to remove this item?"
          id={id}
        />
      </button>
    </div>
  );
};

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  updateItemQuantity: PropTypes.func.isRequired,
};

export default CardItem;
