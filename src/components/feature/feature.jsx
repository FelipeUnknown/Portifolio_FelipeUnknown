import js from "/src/assets/img/JavaScript.png";
import mysql from "/src/assets/img/MySQL.png";
import vite from "/src/assets/img/Vite.js.png";
import react from "/src/assets/img/React.png";
import style from "../feature/feature.module.css";
const Feature = () => {
  return (
    <section className={style.divPai}>
      <div className={style.divCards}>
        <div className={style.cards}>
          <div className={style.diviImg}>
            <img src={react} className={style.reactImg} />
          </div>
          <h3>React</h3>
          <div className={style.divBtn}>
            <a className={style.verMaisBtn} href="/">
              Ver mais
            </a>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.diviImg}>
            <img src={vite} className={style.reactImg} />
          </div>
          <h3>Vite</h3>
          <div className={style.divBtn}>
            <a className={style.verMaisBtn} href="/">
              Ver mais
            </a>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.diviImg}>
            <img src={js} className={style.reactImg} />
          </div>
          <h3>JavaScript</h3>
          <div className={style.divBtn}>
            <a className={style.verMaisBtn} href="/">
              Ver mais
            </a>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.diviImg}>
            <img src={mysql} className={style.reactImg} />
          </div>
          <h3>MySQL</h3>
          <div className={style.divBtn}>
            <a className={style.verMaisBtn} href="/">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
