import style from './styles.module.css'
import Logo from '../../assets/Logo.png'
import Profile from '../../assets/Profile.png'
import Cart from '../../assets/Shop.png'
import { useNavigate } from 'react-router-dom'

export default function Header(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }
    function handleBack(){
        navigate('/home')
    }
    function handleShop(){
        navigate('cart')
    }
    return(
        <header className={style.menu}>
            <button onClick={handleBack} className={style.logo}><img src={Logo} className={style.logo}/></button>
            <div className={style.buttons}>
                <button className={style.button} onClick={handleClick}>
                    <img src={Profile} className={style.pic} />
                </button>
                <button className={style.button} onClick={handleShop}>
                    <img src={Cart} className={style.pic}/>
                </button>
            </div>
        </header>
    )
}