import "./ItemDetailContainer.css";
// import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../services/firebase/index'


const ItemDetailContainer = ({ addItem }) => {
  const [product, setProductDetail] = useState();
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    getDoc(doc(dataBase, 'products', productId)).then(response => {
        const productData = response.data()
        const productsObtenidos = { id: response.id, ...productData}
        setProductDetail(productsObtenidos)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false);
    })
    
  }, [productId]);

  if (loading) {
    return (
      <div className="containerLoading spinner-border" role="status">
        <p className="visually-hidden"> Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="detailTitel">Detalle</h1>
      <ItemDetail {...product} addItem={addItem} />
    </div>
  );
};

export default ItemDetailContainer;
