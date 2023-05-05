import styles from "./styles.module.scss";

import backArrow from "./../../../../static/images/arrow_back.png";
import hp from "./../../../../static/images/hp.png";
import attack from "./../../../../static/images/attack.png";
import deffense from "./../../../../static/images/defense.png";
import speed from "./../../../../static/images/speed.png";
import specialAttack from "./../../../../static/images/special_attack.png";
import specialDefense from "./../../../../static/images/special_defense.png";
import star from "./../../../../static/images/abiliti.png";
import pokeball from "./../../../../static/images/pokeball.png";
import {
  pokemonAbilitiesSelector,
  pokemonIdSelector,
  pokemonImgSelector,
  pokemonNameSelector,
  pokemonPriceSelector,
  pokemonStatsSelector,
} from "../../selector";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicTabs from "../../../../commonComponents/CustomTabs";

const PokemonInfo = () => {
  const navigate = useNavigate();

  const name = useSelector(pokemonNameSelector);
  const id = useSelector(pokemonIdSelector);
  const img = useSelector(pokemonImgSelector);
  const price = useSelector(pokemonPriceSelector);
  const stats = useSelector(pokemonStatsSelector);
  const abilities = useSelector(pokemonAbilitiesSelector);

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={styles.arrow}>
        <img src={backArrow} alt="arrow" onClick={handleBackPage} />
        <h2>Предыдущая страница</h2>
      </div>

      <div className={styles.card}>
        <h1>
          <span>
            <img src={pokeball} alt="pokemon" />
          </span>
          <span> {id}</span> {name}
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__left}>
            <img src={img} alt={name} />
            <p>Price: {price} $</p>
          </div>
          <div className={styles.wrapper__right}>
            <div className={styles.wrapper__right__stats}>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={hp} alt={hp} />
                <p>{stats[0]?.value}</p>
              </div>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={attack} alt={attack} />
                <p>{stats[1]?.value}</p>
              </div>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={deffense} alt={deffense} />
                <p>{stats[2]?.value}</p>
              </div>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={specialAttack} alt={specialAttack} />
                <p>{stats[3]?.value}</p>
              </div>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={specialDefense} alt={specialDefense} />
                <p>{stats[4]?.value}</p>
              </div>
              <div className={styles.wrapper__right__stats__stat}>
                <img src={speed} alt={speed} />
                <p>{stats[5]?.value}</p>
              </div>
            </div>
            <div className={styles.wrapper__right__abiliti}>
              <div className={styles.wrapper__right__abiliti__text}>
                <img src={star} alt="star" />
                <h3>Abilities:</h3>
              </div>
              <BasicTabs
                item1={abilities[0]?.title}
                item1Content={abilities[0]?.description}
                item2={abilities[1]?.title}
                item2Content={abilities[1]?.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
