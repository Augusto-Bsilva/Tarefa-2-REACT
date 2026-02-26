
import { useLoaderData, useNavigate } from "react-router-dom"
import type bookProps from "../../types/Livros"
import Arrow from '../../assets/Arrow.png'
import style from './styles.module.css'

export default function Book(){
    const book: bookProps = useLoaderData()
    const navigate = useNavigate();
    function handleClick(){
        navigate('/home')
    }
  
    return(
        <section>
            
             <div className={style.title}>
                <button 
                    onClick={handleClick}>
                    <img src={Arrow} 
                    className={style.back}/>
                </button>
                <h1>Detalhes do livro</h1>
            </div>
            
            <div className={style.sumary}>
                
                <div className={style.card}>
                  <img src={book.capa}/>
                </div>
                
                <div className={style.more}>
                    
                    <div className={style.names}>
                        <h1>{book.titulo}</h1>
                        <h2>{book.autor}</h2>
                    </div>
                    <div className={style.sinopse}>
                        <h1>Sinopse</h1>
                        <p>{book.sinopse}</p>
                    </div>
                
                </div>
            
            </div>
           
        </section>
           
        
    )
}