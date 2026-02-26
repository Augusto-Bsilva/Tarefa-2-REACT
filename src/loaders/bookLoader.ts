import type { LoaderFunctionArgs } from "react-router-dom";
import type bookProps from "../types/Livros";

export default async function bookLoader({ params }: LoaderFunctionArgs):Promise<bookProps>{
    const response = await fetch (`http://localhost:3000/livros/${params.bookId}`);
    if(!response.ok){
        switch(response.status){
            case 404:
                throw new Response("Livro não encontrado",{ status: 404 })
            case 401:
                throw new Response("Permissão não concedida, acesso negado",{ status: 401 })
            case 400:
                throw new Response("Erro ao carregar livro",{ status: 400 })
            case 500:
                throw new Response("Erro interno do servidor",{ status: 500 })
    }




    }
    const book:bookProps = await response.json();
    return book
}