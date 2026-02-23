import axios from "axios"
import { createContext } from "react"
import type { ReactNode } from "react"
import type BooksContextType from "../types/Context"

export const booksContext = createContext<BooksContextType | null>(null)

export const LivrosProvider = ({ children }: { children: ReactNode }) => {
    
    const livrosDoGenero = (genero:string) =>{
        
        return axios.get(`http://localhost:3000/livros?genero=${genero}&limite=4`)
        .then((response) => {return response.data})
        .catch((erro)=>{console.error('Erro na requisição',erro);})
    }
    
    return(
    <booksContext.Provider value={{livrosDoGenero}}>
        {children}
    </booksContext.Provider>
    )
}