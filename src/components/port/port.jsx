import code from "/src/assets/img/projetoScode.png";
import uno from "/src/assets/img/ProjetoUno.png";
import gemi from "/src/assets/img/ProjetoGemini.png";
import style from "../port/port.module.css";
import {motion} from "framer-motion";
import {useState, useEffect, useRef} from  'react';

const Port = () => {
  const carousel = useRef();
  const[width, setWidth] =useState(0)

    useEffect[()=>{
      setWidth(carousel.current?.scrollWidth - carousel.current?.ofsetWidth);
    }]

  const images = [code,uno,gemi];

  return (
    
    <port className={style.port}>
      <motion.div  ref={carousel} className={style.carousel} whileTap={{cursor: "grabbing"}}>
        <motion.div className={style.inner}
          drag ="x"
          dragConstraints={{ right: 0 , left: -width }}
          initial={{x:100}}
          animate={{x:0}}
          transition={{ duration:0.8}}
        >
          {images. map (image => (<motion.div className={style.item}key={image}>
            <img src={image} alt="texto alt"/>
          </motion.div>)) }
        </motion.div>

      </motion.div>
    </port>
  );
};
export default Port;
