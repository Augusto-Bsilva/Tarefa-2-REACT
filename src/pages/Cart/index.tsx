import Card3 from "../../components/Card3";
import useCartStore from "../../stores/CartStore";
import style from './styles.module.css'



export default function Cart(){
    const cart = useCartStore((state) => state.cart)
    const total = cart.reduce((acc,book)=> acc + book.preco,0 ).toFixed(2)
    return(

        <section>
            <header className={style.title}>
                <h1>Meu Carrinho</h1>
            </header>
            <div className={style.cart}>
                <ul className={style.list}>
                    {cart.map((book, indice)=>(
                    <Card3 
                        key={indice}
                        {...book}
                    />
                    ))}
                </ul>

                <h1 className={style.price}> Total: R${total}</h1>
            </div>
        </section>
    )
}