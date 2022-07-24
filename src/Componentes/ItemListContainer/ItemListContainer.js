import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeTienda } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsDeTienda().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <>
        <h1 className="title">{greeting}</h1>
        <ItemList products={products} />
        </>
    )
}

export default ItemListContainer