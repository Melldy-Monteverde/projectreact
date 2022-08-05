import './Item.css'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Item = ({product}) => {

    const handleOnAdd = (quantity) => {
        console.log(`productos en el cart: ${quantity}`)
      }

    return (
        
        <div className="itemsCardContent">
            <Card style={{ width: '18rem' }} className="itemCard">
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body className="cardBody">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Stock: {product.stock}</Card.Text>
                    <Counter stock={product.stock} onAdd={handleOnAdd}/>
                    <Link variant="primary" className="btn btn-primary verDetalle" to={`/Detalle/${product.id}`}>Ver detalle</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item