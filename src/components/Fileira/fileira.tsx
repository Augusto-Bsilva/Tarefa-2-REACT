import Card from '../Card/Card'
import style from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { useBooks } from '../../hooks/use-books'

export default function FileiraGenero ( { genero }: { genero: string } ){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`vermais/${genero}`)
    }
    const { data:livros, isPending, isError } = useBooks(genero)
   
    
   

    return(
        <section className={style.draft}>
            <header className={style.superior}>
                    <h1>{genero}</h1>
                    <button onClick={handleClick}>Ver mais</button>
            </header>
            <div className={style.lineUp}>
            {!isPending && !isError && livros && livros.length>0?(
                livros.map((livro)=>(
                <Card 
                    key={livro.id}
                    {...livro}
                />
                ))
                ):(
            !isPending && !isError &&(
                    <div>
                        <h2 className={style.error}>Nenhum livro encontrado!</h2>
                    </div>
            )
            )}
            </div>
        </section>
    )
   
}