import { useState } from "react";
import style from './styles.module.css'
import { useNavigate, useParams } from "react-router-dom"
import Lupa from '../../assets/Search.png'
import Arrow from '../../assets/Arrow.png'
import Card2 from '../../components/Card2'
import { useVerMais } from "../../hooks/use-books-by-genero";


export default function VerMais(){
    const [titulo, setTitulo] = useState<string>('')
    const [busca, setBusca] = useState<string>('')
    
    const navigate = useNavigate()
    const { genero } = useParams()

    function handleSubmit(e){
        e.preventDefault();
        setBusca(titulo)
    }
    function handleChange(e){
        e.preventDefault();
        setTitulo(e.target.value)
    }

    function handleClick(){
        navigate('/home')
    }
     const { data:livros, isPending, isError } = useVerMais(genero||"",busca)
    
         return(
        <section>

            <form onSubmit={handleSubmit} className={style.search}>
                <button type="submit" className={style.icon}><img src={Lupa} className={style.icon}/></button>
                <input 
                    type="text"
                    placeholder="Pesquisar por título"
                    value={titulo}
                    onChange={handleChange}
                    required
                />
            </form>
           <div className={style.books}>
                <div className={style.title}>
                    <button 
                        onClick={handleClick}>
                        <img src={Arrow} 
                        className={style.back}/>
                    </button>
                    <h1>{genero}</h1>
                </div>
                <div className={style.lines}>
                    {isPending && <h2 className={style.system}>Buscando Livros...</h2>}
                    {isError && <h2 className={style.system}>Erro ao carregar livros</h2>}
                    {!isPending && !isError && livros && livros.length>0?(
                        livros.map((livro)=>(
                        <Card2 
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
            </div>

        </section>
    )
}