import { create } from "zustand"
import { useCartBooks } from "../hooks/use-cart-books"
import type CartStore from "../types/cart"

const { data:livrosAvailable } = useCartBooks()

const useCartStore = create<CartStore>((set) => (
    {
        livrosAvailable,
        cart: [],
        addToCart:(book) => set((state)=> ({ cart:[...state.cart,book]})),
        removeFromCart:(id) => set((state) => ({ cart: state.cart.filter((book) => book.id !== id)}))
    }
))


export default useCartStore;