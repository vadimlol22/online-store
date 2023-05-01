import styles from "./styles.module.scss";

const PokemonLink = ({ name, image, price }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
  );
};

export default PokemonLink;
