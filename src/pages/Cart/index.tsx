import Card3 from "../../components/Card3";
import useCartStore from "../../stores/CartStore";




export default function Cart(){
    const cart = useCartStore((state) => state.cart)
    const total = cart.reduce((acc,book)=> acc + book.preco,0 )
    return(

        <section>
            <h1></h1>
            <ul>
                {cart.map((book, indice)=>(
                   <Card3 
                    key={indice}
                    {...book}
                   />
                ))}
            </ul>
            <h1> Total: R${total}</h1>
        </section>
    )
}