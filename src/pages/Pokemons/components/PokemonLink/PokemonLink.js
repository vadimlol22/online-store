import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


import { isLoadingSelector } from "../../selectors";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./styles.module.scss";
import CustomButton from "../../../../commonComponents/CustomButton";
import { cardItemsSelector } from "../../../ShopCard/selector";

const PokemonLink = ({ name, image, price, id, handleAddToCard }) => {
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingSelector);
  const cardItems = useSelector(cardItemsSelector);

  const pokemonInCard = cardItems.filter((pokemon) =>
    pokemon.name.includes(name)
  );

  return (
    <div className={isLoading ? styles.loading : styles.wrapper}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <div>
        <CustomButton
          disabled={isLoading || pokemonInCard.length !== 0 ? true : false}
          text={pokemonInCard.length === 0 ? "add poke" : "poke in cart"}
          color="primary"
          onClick={() =>
            handleAddToCard({ id, image, name, price, quantity: 1 })
          }
        />
        <CustomButton
          disabled={isLoading ? true : false}
          text="about poke"
          color="primary"
          onClick={() => navigate(`${ROUTE_NAMES.POKEMONS}/${id}`)}
        />
      </div>
    </div>
  );
};

PokemonLink.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleAddToCard: PropTypes.func.isRequired,
};

export default PokemonLink;
