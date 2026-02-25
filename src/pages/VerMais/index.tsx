import { useEffect, useState } from "react";
import type bookProps from "../../types/Livros";
import axios from "axios";
import style from './styles.module.css'
import { useNavigate, useParams } from "react-router-dom"
import Lupa from '../../assets/Search.png'
import Arrow from '../../assets/Arrow.png'
import Card2 from '../../components/Card2'


export default function VerMais(){
    const [livros,setLivros] = useState<bookProps[]>([])
    const [busca,setBusca] = useState<boolean>(false)
    const [titulo, setTitulo] = useState<string>('')
    const navigate = useNavigate()
    const { genero } = useParams()

    function handleSubmit(e){
        e.preventDefault();
        setBusca(!busca)
    }
    function handleChange(e){
        e.preventDefault();
        setTitulo(e.target.value)
    }

    function handleClick(){
        navigate('/home')
    }
    
    useEffect(()=>{
            if (busca) {
                const config={
                params:{
                genero:genero,
                titulo:titulo
                }
             }
             axios.get('http://localhost:3000/livros',config)
             .then((response)=> setLivros(response.data))
             .catch((erro)=>{console.error('Erro na requisição',erro);})
            }else{
                const config={
                params:{
                genero:genero,
                }
             }
             axios.get('http://localhost:3000/livros',config)
             .then((response)=> setLivros(response.data))
             .catch((erro)=>{console.error('Erro na requisição',erro);})
            }

         },[busca])
    
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
                    {livros.map((livro)=>(
                        <Card2 
                            key={livro.id}
                            {...livro}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}