import type bookProps from "../../types/livros";
import style from './styles.module.css'
import Delete from '../../assets/Trash.png'
import useCartStore from "../../stores/CartStore";

export default function Card3 ({ id,titulo ,autor,genero,preco,sinopse,capa }:bookProps){

    const removeFromCart = useCartStore((state) => state.removeFromCart)

    function handleClick(){
        removeFromCart(id)
    }
    
    
    return(
        <div className={style.product}>
            <div className={style.bookCard}>
                
                <img src={capa} className={style.cover}/>
                
                <div className={style.data}>
                    
                    <div className={style.info}>
                        <h1>{titulo}</h1>
                        <p>{autor} </p>
                    </div>
                    
                    <p className={style.price}>R${preco}</p>
                </div>  
    
            </div>
            <button onClick={handleClick} className={style.delete}><img src={Delete}/></button>
        </div>
    )
}