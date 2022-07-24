import './Item.css'
const Item = ({product}) => {
    return (
        <li className="li-products">
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
            <button className="verDetalle">Ver detalle{product.description}</button>
            <p>Stock: {product.stock}</p>
        </li>
    )
}

export default Item