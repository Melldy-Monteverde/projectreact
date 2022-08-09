import './Counter.css'
import { useState } from 'react'

const Counter = ({ stock = 0, initial = 1, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        quantity !== initial && setQuantity(quantity - 1);
          
    }

    return (
        <div className="btn_container">
            <button className="btn btnRmv" onClick={decrement}>-</button>
            <h4 className="counter">{quantity}</h4>
            <button className="btn btnAdd" onClick={increment}>+</button> 
            <button className="btn btnAdd-cart btn-success" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter