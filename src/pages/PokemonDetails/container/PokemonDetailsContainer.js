import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonDetailsThunk } from "../api";
import { isPokemonDetailsLoadingSelector } from "../selector";
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";
import CustomSkeleton from "../../../commonComponents/CustomSkeleton";

import styles from "./styles.module.scss";
import { useScrollTop } from "../../../commonComponents/hooks";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useScrollTop(id);

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(id));
  }, [id, dispatch]);

  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  return (
    <div>
      {isLoading ? (
        <CustomSkeleton width={800} height={700} />
      ) : (
        <div className={styles.item}>
          <PokemonInfo />
        </div>
      )}
    </div>
  );
};

export default PokemonDetailsContainer;
