import type { BookState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useBook(id:number): BookState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livro',id],
        queryFn: async ()=>bookService.bookByID(id).then((res) => res.data),
        refetchInterval: 1000 * 60 * 5
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