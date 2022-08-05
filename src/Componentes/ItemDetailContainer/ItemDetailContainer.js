import './ItemDetailContainer.css'
import { getProductsById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProductDetail] = useState();
    const { productId } = useParams();
    const [loading, setLoading] = useState(false)

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
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer