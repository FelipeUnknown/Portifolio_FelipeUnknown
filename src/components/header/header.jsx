
import style from "../header/header.module.css";
const Header = () =>{
    return(
        
        <header className={style.header}>
            <div className={style.divPai}>
                <div>
                <a className={style.logoBtn}href="/">
                    <h3>
                        FelipeUnknow
                    </h3>
                </a>
                </div>

                <nav className={style.navUlDiv}>
                    <ul className={style.navUl}>
                        <li className={style.navLi}>
                            <a className={style.navBtns}href="/">Inicio</a>
                        </li>
                        <li className={style.navLi}>
                            <a className={style.navBtns}href="/">Portifolio</a>
                        </li>
                        <li className={style.navLi}>
                            <a className={style.navBtns} href="/">Ajustes</a>
                        </li>
                        <li className={style.navLi}>
                            <a className={style.contatoBtn} href="/" >Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>        
        </header>
    );

};

export default Header;