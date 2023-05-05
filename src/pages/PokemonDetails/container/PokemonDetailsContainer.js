import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonDetailsThunk } from "../api";
import { isPokemonDetailsLoadingSelector } from "../selector";
import CustomSpinner from "../../../commonComponents/CustomSpinner";
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";

import styles from "./styles.module.scss";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(id));
  }, [id, dispatch]);

  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  return (
    <div>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <div className={styles.item}>
          <PokemonInfo />
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsContainer;
