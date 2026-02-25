import { useEffect, useState } from 'react'

import type bookProps  from '../../types/Livros'
import Card from '../Card/Card'
import style from './styles.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function FileiraGenero ( { genero }: { genero: string } ){
    const [livros,setLivros] = useState<bookProps[]>([])
    const navigate = useNavigate()
    function handleClick(){
        navigate(`vermais/${genero}`)
    }
    useEffect(()=>{
         const config={
            params:{
                _limit: 4,
                genero:genero

            }
        }
        axios.get('http://localhost:3000/livros',config)
        .then((response)=> setLivros(response.data))
        .catch((erro)=>{console.error('Erro na requisição',erro);})
    },[])
    
   

    return(
        <section className={style.draft}>
            <header className={style.superior}>
                    <h1>{genero}</h1>
                    <button onClick={handleClick}>Ver mais</button>
            </header>
            <div className={style.lineUp}>
                {livros?.map((livro)=>(
                    <Card 
                        key={livro.id}
                        {...livro}
                    />
                ))}
            </div>
        </section>
    )
   
}