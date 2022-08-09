import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryID } = useParams()
    const [loading, setLoading] = useState(true)
    // const tittlePage = categoryID ? categoryID : greeting

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryID ? getProductsByCategory : getProducts

        asyncFunction(categoryID).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)

        })
    }, [categoryID])

    if (loading) {
        return  <Spinner animation="border" role="status" className="spiner">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
    }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
        <h1 className="title">{`${greeting} ${categoryID || ''}`}</h1>
        <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer