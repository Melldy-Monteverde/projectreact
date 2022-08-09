import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className="ulList" onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
            {/* {products.map(prod => <Item key={prod.id} {...prod} />)} */}
        </div>
    )
}

export default ItemList