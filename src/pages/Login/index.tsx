import Wallpaper from '../../assets/Picture.png'
import style from './styles.module.css'
import Logo from '../../assets/Logo.png'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const userSchema = z.object({
    
    email:z.string().nonempty('Insira seu e-mail').refine( value => z.string().email().safeParse(value).success, {
        message:'Insira um email válido'
    }),
    senha: z.string().nonempty('Insira sua senha').min(6,'A senha deve ter no mínimo 6 caracteres')
})



type User = z.infer<typeof userSchema>


export default function Login(){
    const { register, handleSubmit, reset, formState:{errors, isSubmitting}, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    })
    
    const navigate = useNavigate()
    
    async function createUser(data:User){
        
        try{
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data)
        navigate('/home')
        reset()
      
        }catch{
        setError('root',{
            message:"Erro ao realizar login"
        })
        }
    }
    
    
    
    return(
        <main className={style.entrance}>
            
            <aside>
                <img src={Wallpaper} className={style.bookstore}/>
            </aside>
            
            <section>
                
                <header><img src={Logo} className={style.logo}/></header>
                
                <form onSubmit={handleSubmit(createUser)} className={style.log}>
                    
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
                            {...register('email')}
                        />
                        {errors.email && <span className={style.error}>{errors.email.message}</span>}
                    </div>
                    
                    <div className={style.senha}>
                        <label htmlFor='Senha'>Senha</label>
                        <input 
                            className={style.senhaInput}
                            type='password'
                            placeholder='Digite aqui sua senha'
                            id='Senha'
                            {...register('senha')}
                        />
                        {errors.senha && <span className={style.error}>{errors.senha.message}</span>}
                    </div>
                    
                    <button 
                        disabled={isSubmitting} 
                        className={style.enter}>
                        {isSubmitting? 'Entrando...':'Entrar'}
                    </button>
                    <button className={style.signUp}>Cadastre-se</button>
               
                </form>
            
            </section>
        </main>
    )
}