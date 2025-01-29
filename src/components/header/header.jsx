
import style from "../header/header.module.css";
const Header = () =>{
    return(
        
        <header>
            <div>
                <div>
                <a>
                    <h3>
                        teste
                    </h3>
                </a>
                </div>

                <nav className={style.navUlDiv}>
                    <ul className={style.navUl}>
                        <li className={style.navLi}>
                            <a>Inicio</a>
                        </li>
                        <li className={style.navLi}>
                            <a>Portifolio</a>
                        </li>
                        <li className={style.navLi}>
                            <a>Ajustes</a>
                        </li>
                        <li className={style.navLi}>
                            <a className={style.contatoBtn}>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>        
        </header>
    );

};

export default Header;