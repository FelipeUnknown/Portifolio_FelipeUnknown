
import style from "../hero/hero.module.css";
import img from "/src/assets/img/ProjetoGemini.png";
const Hero = () =>{
    return(
        <hero className={style.hero}>
            <section className={style.divSection}>
                <div className={style.divImg}>
                    <a href="https://gemini-react-vite.vercel.app">
                        <img src={img} className={style.IMG}></img>
                    </a>
                </div>
                <div className={style.divText}>
                    <p>O que é o Lorem Ipsum?
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
                    <div className={style.divBtn}>
                        <a className={style.vejaMaisBtn} href="https://gemini-react-vite.vercel.app">Veja mais</a>
                    </div>
                </div>

            </section>
            <div>

            </div>
        </hero>
    );
}
export default Hero;