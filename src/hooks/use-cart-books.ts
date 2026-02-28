import type { CartState } from "../types/state";
import { useQuery } from "@tanstack/react-query";
import { bookService } from "../services/book-service";

export function useCartBooks(): CartState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livros-cart'],
        queryFn: async ()=>bookService.allBooks().then((res) => res.data)
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