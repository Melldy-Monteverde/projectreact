import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
       
        <Link to='/cart' className="cart-container">
            <img src='/images/cart.svg' alt='CartWidget' className="cartLogo"/>
            <span className="cartCounter">0</span>
        </Link>
    )
}

export default CartWidget

// <div className="cart-container">
//     <img src='/images/cart.svg' alt='CartWidget' className="cartLogo"/>
//     <span className="cartCounter">0</span>
// </div>