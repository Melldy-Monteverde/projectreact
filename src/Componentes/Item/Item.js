import './Item.css'
const Item = ({product}) => {
    return (
        <li className="li-products">
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
        </li>
    )
}

export default Item