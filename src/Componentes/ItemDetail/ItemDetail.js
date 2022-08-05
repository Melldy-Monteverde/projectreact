// import react from 'react'
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { Card } from 'react-bootstrap'

const ItemDetail = ({img, name, description, category, price, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log(`la cantidad agregada es: ${quantity}`)
    }

    return (
        
        <Card className="itemDetailContent shadow-lg p-3 mb-5 bg-body rounded">
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Counter stock={stock} onAdd={handleOnAdd}/>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail