import { useEffect, useState } from "react";
import type bookProps from "../../types/Livros";
import axios from "axios";
import FileiraGenero from "../../components/Fileira/fileira";
import style from './styles.module.css'
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function VerMais(){
    const [livros,setLivros] = useState<bookProps[]>([])
    const { genero } = useParams()
    
    useEffect(()=>{
            const config={
                params:{
                genero:genero
     
                }
             }
             axios.get('http://localhost:3000/livros',config)
             .then((response)=> setLivros(response.data))
             .catch((erro)=>{console.error('Erro na requisição',erro);})
         },[])
    
         return(
        <section className={style.lines}> 
            {livros.map((livro)=>(
                <Card key={livro.id} {...livro} />
            ))}
        </section>
    )
}