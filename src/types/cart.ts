import type bookProps from "./livros";
export default interface CartStore {
    cart: bookProps[];
    addToCart: (book:bookProps) => void;
    removeFromCart: (id:number) => void;
}


