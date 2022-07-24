import './Counter.css'
import { useState } from 'react'

const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock ) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className="btn_container">
            <h4 className="counter">{count}</h4>
            <button className="btn btnRmv" onClick={decrement}>-</button>
            <button className="btn btnAdd" onClick={increment}>+</button> 
            <button className="btn btnAdd-cart" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter