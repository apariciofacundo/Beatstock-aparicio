import '../cartWidget/cartWidget.css'
import cart from '../logos/cart.svg'


export const CartWidget = () => {
    return(
        <img className='cart' src={cart} alt='cart'/>
    )
}