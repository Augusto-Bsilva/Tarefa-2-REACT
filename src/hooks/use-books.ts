import type { HomeState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useBooks(genero:string): HomeState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livros-home',genero],
        queryFn: async ()=>bookService.books(4,genero).then((res) => res.data)
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