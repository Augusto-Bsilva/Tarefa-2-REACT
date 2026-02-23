import FileiraGenero from "../../components/Fileira/fileira"
import Painel from '../../assets/Banner Area.png'
import style from './styles.module.css'


export default function Home(){
  
    const generos = ['Best-sellers', 'Clássicos','Infantil','Fantasia','Suspense','Distopia','Ficção Científica']
   
    return(
         <>
         <aside>
            <img src={Painel} className={style.outdoor}/>
        </aside>
        <div className={style.line}>
            {generos.map((categoria)=>(
                <FileiraGenero key={categoria} genero={categoria} />
            ))}
        </div>
        </>
    )
}