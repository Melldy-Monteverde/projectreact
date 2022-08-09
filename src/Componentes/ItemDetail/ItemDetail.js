import './ItemDetail.css'
// import Counter from '../Counter/Counter'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    console.log(quantityToAdd)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        // console.log(quantity)
        setQuantityToAdd(quantity)
    }

    const Count = inputType === 'button' ? ButtonCount : InputCount

    return (
        <Card className="itemDetailContent shadow-lg p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'Escriba cantidad' : 'Seleccionar cantidad'}</button>
                <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <Count onConfirm={handleOnAdd} stock={stock} initial={1}/>
                        ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                    }
                </footer>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail

// const ItemDetail = ({img, name, description, category, price, stock }) => {

//     const handleOnAdd = (quantity) => {
//         console.log(`la cantidad agregada es: ${quantity}`)
//     }

//     return (
        
//         <Card className="itemDetailContent shadow-lg p-3 mb-5 bg-body rounded">
//             <Card.Img variant="top" src={img} alt={name} />
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>{description}</Card.Text>
//                 <Card.Text>${price}</Card.Text>
//                 <Counter stock={stock} onAdd={handleOnAdd}/>
//             </Card.Body>
//         </Card>
//     )
// }
