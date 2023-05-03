import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPokemonsThunk } from "../api";
import PokemonLink from "../components/PokemonLink/PokemonLink";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { usePagination, useScrollTop } from "../../../commonComponents/hooks";
import CustomPagination from "../../../commonComponents/CustomPagination";
import Errors from "../components/Errors/Errors";

import styles from "./styles.module.scss";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.dataFetching.data);
  const errors = useSelector((state) => state.dataFetching.errors);

  const [page, handlePageChange] = usePagination(1);

  useScrollTop(page);

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 12 }));
  }, [dispatch, page]);

  return (
    <div className={styles.wrapper}>
      <h1>NEW POKEMONS</h1>

      {errors && <Errors errors={errors} />}

      <div className={styles.wrapper__pokemons}>
        {pokemons.map(({ name, image, price }) => (
          <Link
            key={name}
            to={`${ROUTE_NAMES.POKEMON_DETAILS}/${name}`}
            className={styles.pokemons__pokemon}
            style={{
              textDecoration: "none",
            }}
          >
            <PokemonLink name={name} image={image} price={price} />
          </Link>
        ))}
      </div>
      <div className={styles.wrapper__pagination}>
        <CustomPagination page={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PokemonsContainer;
