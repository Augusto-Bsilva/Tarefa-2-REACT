import Wallpaper from '../../assets/Picture.png'
import style from './styles.module.css'
import Logo from '../../assets/Logo.png'




export default function Login(){
    return(
        <main className={style.entrance}>
            <aside>
                <img src={Wallpaper} className={style.bookstore}/>
            </aside>
            <section>
                <header><img src={Logo} className={style.logo}/></header>
                <form className={style.log}>
                    <div className={style.welcome}>
                        <h2>Bem vindo(a)!</h2>
                        <h1>Entre na sua conta</h1>
                    </div>
                    <div className={style.email}>  
                        <label htmlFor='Email'>E-mail</label>    
                        <input 
                            className={style.emailInput}
                            type='email'
                            placeholder='Digite aqui seu e-mail'
                            id='Email'
                        />
                    </div>
                    <div className={style.senha}>
                        <label htmlFor='Senha'>Senha</label>
                        <input 
                            className={style.senhaInput}
                            type='password'
                            placeholder='Digite aqui sua senha'
                            id='Senha'
                        />
                    </div>
                    <button className={style.enter}>Entrar</button>
                    <button className={style.signUp}>Cadastre-se</button>
                </form>
            </section>
        </main>
    )
}