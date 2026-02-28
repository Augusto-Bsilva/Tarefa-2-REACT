import { create } from "zustand"
import { useCartBooks } from "../hooks/use-cart-books"

 const { data:livros, isPending, isError } = useCartBooks()


const useCartStore = create((set) => (
    {
        livros,
        cart: []
    }
))