import './Item.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ img, name, stock, id }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en item')
    }

    return (
        
        <div className="itemsCardContent">
            <Card style={{ width: '18rem' }} className="itemCard" onClick={handleClick}>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body className="cardBody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Link variant="primary" className="btn btn-primary verDetalle" to={`/Detalle/${id}`}>Ver detalle</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item