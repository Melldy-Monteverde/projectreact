import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryID } = useParams()
    const [loading, setLoading] = useState(false)
    // const tittlePage = categoryID ? categoryID : greeting

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryID ? getProductsByCategory : getProducts

        asyncFunction(categoryID).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryID])

    if (loading) {
        return <div className="containerLoading spinner-border" role="status">
                <p className="visually-hidden"> Cargando...</p>
            </div>
    }

    return (
        <>
        <h1 className="title">{greeting}</h1>
        <ItemList products={products} />
        </>
    )
}

export default ItemListContainer