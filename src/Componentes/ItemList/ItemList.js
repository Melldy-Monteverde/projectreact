import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <ul className="ulList">
            {products.map(prod => <Item key={prod.id} product ={prod}/>)}
        </ul>
    )
}

export default ItemList