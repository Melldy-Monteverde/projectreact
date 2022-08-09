import './ItemDetailContainer.css'
import { getProductsById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ addItem }) => {
    const [product, setProductDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductsById(productId).then((responde) => {
            setProductDetail(responde);
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <div className="containerLoading spinner-border" role="status">
                    <p className="visually-hidden"> Cargando...</p>
                </div>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer