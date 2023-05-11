import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPokemonsThunk } from "../api";
import PokemonLink from "../components/PokemonLink/PokemonLink";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { usePagination, useScrollTop } from "../../../commonComponents/hooks";
import CustomPagination from "../../../commonComponents/CustomPagination";
import Errors from "../components/Errors/Errors";

import styles from "./styles.module.scss";
import CustomInput from "../../../commonComponents/CustomInput";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.dataFetching.data);
  const errors = useSelector((state) => state.dataFetching.errors);

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
        {sortedPokemons.map(({ id, name, image, price }) => (
          <Link
            key={name}
            to={`${ROUTE_NAMES.POKEMONS}/${id}`}
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
