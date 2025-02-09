import code from "/src/assets/img/projetoScode.png";
import uno from "/src/assets/img/ProjetoUno.png";
import gemi from "/src/assets/img/ProjetoGemini.png";
import style from "../port/port.module.css";
const Port = () => {
  return (
    <port className={style.port}>
      <section className={style.section}>
        <div className={style.cardsDiv}>
          <a href="/">
            <img src={gemi} className={style.img} />
          </a>
        </div>
        <div className={style.cardsDiv}>
          <a href="/">
            <img src={uno} className={style.img} />
          </a>
        </div>
        <div className={style.cardsDiv}>
          <a href="/">
            <img src={code} className={style.img} />
          </a>
        </div>
      </section>
    </port>
  );
};
export default Port;
