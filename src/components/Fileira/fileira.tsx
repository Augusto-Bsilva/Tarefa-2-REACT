import { useContext, useEffect, useState } from 'react'
import { booksContext } from '../../stores/booksContext'
import type bookProps  from '../../types/Livros'
import Card from '../Card/Card'
import style from './styles.module.css'

export default function FileiraGenero ( {genero}: {genero: string} ){
    const [livros,setLivros] = useState<bookProps[]>([])
    const library = useContext(booksContext)

    useEffect(()=>{
        if (library?.livrosDoGenero) {
            library.livrosDoGenero(genero)
            .then((data: bookProps[])=>{setLivros(data)})
        }
    },[])

    return(
        <>
            {livros.map((livro)=>(
            <div>
                <h1>{livro.genero}</h1>
            <Card 
                key={livro.id}
                {...livro}
            />
            </div>
            ))}
        
        </>
    )
    
}