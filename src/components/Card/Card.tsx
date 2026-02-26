import { useNavigate } from "react-router-dom";
import type bookProps from "../../types/Livros";
import style from './styles.module.css'

export default function Card ({ id,titulo ,autor,genero,preco,sinopse,capa }:bookProps){
    
    const navigate = useNavigate()
    function handleClick(){
        navigate(`book/${id}`)
    }
    
    return(
        <div>
            <button className={style.bookCard} onClick={handleClick}>
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