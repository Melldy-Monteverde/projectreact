import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return (
        quantity > 0 ? (
            <Link to='/cart' className="cart-container">
                <FaShoppingCart />
                <span className="cartCounter">{ quantity }</span>
            </Link>
        ) : (
            <div className="emtyCart"></div>
        )
        
    )
}

export default CartWidget