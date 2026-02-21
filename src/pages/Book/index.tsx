import { useParams } from "react-router-dom"

export default function Book(){
    const { bookId } = useParams()
    const book = livros.find(book => book.id === Number(bookId))
    if(!book){
        return <h1>Livro não encontrado</h1>
    }
    return(
        <>
            <h1>King</h1>
            <p>Reinadoooooooooooo</p>
        </>
    )
}