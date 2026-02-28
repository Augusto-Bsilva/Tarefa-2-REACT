import { create } from "zustand"
import type CartStore from "../types/cart"

const useCartStore = create<CartStore>((set) => ( 
    {
        cart: [],
        addToCart:(book) => set((state)=> ({ cart:[...state.cart,book]})),
        removeFromCart:(id) => set((state) => {
            const bookIndex = state.cart.findIndex((book) => book.id === id);
            return{
                cart: state.cart.filter((book,index)=> index !== bookIndex)
            };
        })
    }
))


export default useCartStore;