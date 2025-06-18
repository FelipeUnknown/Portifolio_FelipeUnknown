import { useState } from "react";
import style from "../header/header.module.css";
import { link, select } from "framer-motion/client";
import MenuBars from "../../assets/img/menuBars.svg";
import MenuClose from "../../assets/img/menuClose.svg";

const Header = () => {
  const [menuActive, setMenuactive] = useState(false);
  const links = [
    {name:"Inicio", link: '/'},
    {name:"Portifolio", link:'/'},
    {name:"Ajustes", link:'/'},
    {name:"Contato", link:'/'}
  ];
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${style.Header}${menuActive ? style.active : ""}`}>
      <div className={style.divWrapper}>
        <div>
          <a className={style.logoBtn} href="/">
            <h3>FelipeUnknown</h3>
          </a>
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? MenuClose : MenuBars}
            id={style.menuIcons}
            alt="icon menu mobille"
          />
        </button>

        <nav className={style.navUlDiv}>
          <ul className={style.navUl} id={style.Menu}>
            {links.map((link, index) =>(
              <li className={style.navLi} key={index}><a href="" rel="noreferrer, noopener" className={style.linksMenuLi} key={index}>{link.name}</a></li>
            ))}
            <li></li>
            <li className={style.navLi}>
              <a className={style.navBtns} href="/">
                Inicio
              </a>
            </li>
            <li className={style.navLi}>
              <a className={style.navBtns} href="/">
                Portifolio
              </a>
            </li>
            <li className={style.navLi}>
              <a className={style.navBtns} href="/">
                Ajustes
              </a>
            </li>
            <li className={style.navLi}>
              <a className={style.contatoBtn} href="/">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
