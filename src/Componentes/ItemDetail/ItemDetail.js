import './ItemDetail.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    console.log(quantityToAdd)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)

        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)

    }

    const productQuantity = getProductQuantity(id)

    return (
        <Card className="itemDetailContent shadow-lg p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <footer className='ItemFooter'>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
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
