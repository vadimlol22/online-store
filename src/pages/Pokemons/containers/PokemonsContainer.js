import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonsThunk } from "../api";
import { dataErrorsSelector, dataSelector } from "../selectors";
import PokemonLink from "../components/PokemonLink/PokemonLink";
import Errors from "../components/Errors/Errors";
import {
  useCard,
  usePagination,
  useScrollTop,
} from "../../../commonComponents/hooks";
import CustomPagination from "../../../commonComponents/CustomPagination";
import CustomInput from "../../../commonComponents/CustomInput";

import styles from "./styles.module.scss";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const { addItemToCard } = useCard();

  const pokemons = useSelector(dataSelector);
  const errors = useSelector(dataErrorsSelector);

  const [page, handlePageChange] = usePagination(1);
  const [search, setSearch] = useState("");

  useScrollTop(page);

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 24 }));
  }, [dispatch, page]);

  const sortedPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => pokemon.name.includes(search));
  }, [search, pokemons]);

  return (
    <div className={styles.wrapper}>
      <h1>NEW POKEMONS</h1>

      <div className={styles.wrapper__input}>
        <CustomInput
          label={"Search Pokemon"}
          type={"text"}
          name={"search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          color={"warning"}
          variant={"filled"}
          id={"outlined-basic"}
        />
      </div>

      {errors && <Errors errors={errors} />}

      <div className={styles.wrapper__pokemons}>
        {sortedPokemons.length === 0 ? (
          <div className={styles.wrapper__pokemons__clear}>
            pokemon not found
          </div>
        ) : (
          sortedPokemons.map(({ id, name, image, price }) => (
            <PokemonLink
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              handleAddToCard={addItemToCard}
            />
          ))
        )}
      </div>
      <div className={styles.wrapper__pagination}>
        <CustomPagination page={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PokemonsContainer;
