import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isLoadingSelector } from "../../selectors";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./styles.module.scss";
import CustomButton from "../../../../commonComponents/CustomButton";

const PokemonLink = ({ name, image, price, id, handleAddToCard }) => {
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingSelector);

  return (
    <div className={isLoading ? styles.loading : styles.wrapper}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <div>
        <CustomButton
          disabled={false}
          text="add poke"
          color="primary"
          onClick={() =>
            handleAddToCard({ id, image, name, price, quantity: 1 })
          }
        />
        <CustomButton
          disabled={false}
          text="about poke"
          color="primary"
          onClick={() => navigate(`${ROUTE_NAMES.POKEMONS}/${id}`)}
        />
      </div>
    </div>
  );
};

export default PokemonLink;
