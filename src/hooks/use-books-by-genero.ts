import type { VerMaisState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useVerMais(genero:string): VerMaisState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livros-genero',genero],
        queryFn: async ()=>bookService.booksByGenero(genero).then((res) => res.data)
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