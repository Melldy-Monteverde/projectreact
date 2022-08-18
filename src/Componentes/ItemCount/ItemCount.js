import './Counter.css'
import { useState } from 'react'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        quantity !== stock && setQuantity(quantity + 1);
    }

    const decrement = () => {
        quantity !== initial && setQuantity(quantity - 1);
    }

    return (
        <div className="btn_container">
            <button className="btn btnRmv" disabled={quantity <= initial} onClick={decrement}>-</button>
            <h3 className="counter">{quantity}</h3>
            <button className="btn btnAdd" disabled={quantity >= stock} onClick={increment}>+</button>
            <button className="btn btnAdd-cart btn-success" onClick={() => onAdd(quantity)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount