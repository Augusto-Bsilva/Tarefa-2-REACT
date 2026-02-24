import type bookProps from "../../types/Livros";
import style from './styles.module.css'

export default function Card ({ id,titulo ,autor,genero,preco,sinopse,capa }:bookProps){
    return(
        <div>
            <button className={style.bookCard}>
                <img src={capa} className={style.cover}/>
                <div className={style.info}>
                    <h1>{titulo}</h1>
                    <p>{autor}</p>
                    <p>R${preco}</p>
                </div>
            </button>
            
        </div>
    )
}