import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type bookProps from "../../types/Livros"

export default function Book(){
    const [books,setBooks] = useState<bookProps[]>([])
    const { bookId } = useParams()
    
    useEffect(()=>{
             axios.get('http://localhost:3000/livros')
             .then((response)=> setBooks(response.data))
             .catch((erro)=>{console.error('Erro na requisição',erro);})
        },[])
        
    const book = books.find(book => book.id === Number(bookId))
     if(!book){
        return <h1> Livro não encontrado!</h1>
    }
    return(
        <section>
            <h1>Nome do livro: {book.titulo}</h1>
            <p>preco do livro: </p>
           
        </section>
           
        
    )
}