import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { dataBase } from '../../services/firebase/index'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const prodRef = !categoryID ? collection(dataBase, 'products') : query(collection(dataBase, 'products'), where('category', '==', categoryID))

    getDocs(prodRef).then(response => {
        const productsObtenidos = response.docs.map(doc => {
            const productData = doc.data()
            return { id: doc.id, ...productData}
        })
        setProducts(productsObtenidos)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false);
    })

  }, [categoryID]);

  if (loading) {
    return (
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <h1 className="greeting-title">{`${greeting} ${categoryID || ""}`}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;