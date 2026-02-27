import type { HomeState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useBooks(): HomeState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livros-home'],
        queryFn: async ()=>bookService.books(4).then((res) => res.data)
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