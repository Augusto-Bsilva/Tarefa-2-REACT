import { useContext, useEffect, useState } from 'react'
import { booksContext } from '../../stores/booksContext'
import type bookProps  from '../../types/Livros'
import Card from '../Card/Card'
import style from './styles.module.css'

export default function FileiraGenero ( {genero}: bookProps ){
    const [livros,setLivros] = useState<bookProps[]>([])
    const library = useContext(booksContext)

    useEffect(()=>{
        if (library?.livrosDoGenero) {
            library.livrosDoGenero(genero)
            .then((data: bookProps[]) => {setLivros(data)})
    }},[genero])

    return(
        <section className={style.draft}>
            <header className={style.superior}>
                    <h1>{genero}</h1>
                    <button>Ver mais</button>
            </header>
            <div className={style.lineUp}>
                {livros.map((livro)=>(
                    <Card 
                        key={livro.id}
                        {...livro}
                    />
                ))}
            </div>
        </section>
    )
    
}