import { create } from "zustand"
import type CartStore from "../types/cart"

const useCartStore = create<CartStore>((set) => ( 
    {
        cart: [],
        addToCart:(book) => set((state)=> ({ cart:[...state.cart,book]})),
        removeFromCart:(id) => set((state) => ({ cart: state.cart.filter((book) => book.id !== id)}))
    }
))


export default useCartStore;