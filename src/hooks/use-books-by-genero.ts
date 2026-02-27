import type { VerMaisState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useVerMais(genero:string, titulo:string): VerMaisState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livros-genero',genero, titulo],
        queryFn: async ()=>bookService.booksByGenero(genero,titulo).then((res) => res.data)
    });
    return (
        {
            data,
            error: error ?? undefined,
            isPending,
            isError,
            isSuccess,
            execute:() => refetch()
        }

    )
}