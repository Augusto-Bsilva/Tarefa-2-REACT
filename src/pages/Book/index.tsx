import {  useNavigate, useParams } from "react-router-dom"
import Arrow from '../../assets/Arrow.png'
import style from './styles.module.css'
import { useBook } from "../../hooks/use-book"
import useCartStore from "../../stores/CartStore"
import { useState } from "react"

export default function Book(){
    const navigate = useNavigate();
    const { bookId } = useParams()
    const { data:book, isPending, isError, error } = useBook(Number(bookId))
    const [add,setAdd] = useState(false)
    const addToCart = useCartStore((state)=> state.addToCart);
    
    function handleClick(){
        navigate('/home')
    }
    function handleAdd(){
        if(book){
            addToCart(book)
            setAdd(true)
            setTimeout(()=>{
                setAdd(false)
            },2000)
        }
    }
    if(isPending){
        return <h1 className={style.system}>Carregando informações do livro...</h1>
    }
    else if(isError||!book){

        const status = (error as any)?.response?.status;
        switch (status){
            case 404:
                return <h1 className={style.system}>Livro não encontrado</h1>;
            case 401:
                return <h1 className={style.system}>Permissão não concedida, acesso negado</h1>;
            case 400:
                return <h1 className={style.system}>Erro ao carregar livro</h1>;
            case 500:
                return <h1 className={style.system} >Erro interno do servidor</h1>;
            default:
                return <h1 className={style.system} >Algo deu errado!</h1>;
        }
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
           <div className={style.last}>
                <button className={style.buy} onClick={handleAdd}><h1 className={style.price}>R${book.preco}</h1><h1 className={style.add}>{add? "Adicionando...":"Adicionar ao carrinho"}</h1></button>
           </div>
        </section>
           
        
    )
}

