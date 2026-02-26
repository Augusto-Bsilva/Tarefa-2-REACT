import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import type bookProps from "../../types/Livros"

export default function Book(){
    const book: bookProps = useLoaderData()

  
    return(
        <section>
            <h1>Nome do livro: {book.titulo}</h1>
            <p>preco do livro: </p>
           
        </section>
           
        
    )
}