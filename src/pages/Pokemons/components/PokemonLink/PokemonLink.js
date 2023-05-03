import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

const PokemonLink = ({ name, image, price }) => {
  const isLoading = useSelector((state) => state.dataFetching.isLoading);

  return (
    <div className={isLoading ? styles.loading : styles.wrapper}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
  );
};

export default PokemonLink;
