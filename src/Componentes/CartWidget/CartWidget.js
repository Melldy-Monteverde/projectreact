import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
       
        <Link to='/cart' className="cart-container">
            <img src='/images/cart.svg' alt='CartWidget' className="cartLogo"/>
            <span className="cartCounter">{ quantity }</span>
        </Link>
    )
}

export default CartWidget