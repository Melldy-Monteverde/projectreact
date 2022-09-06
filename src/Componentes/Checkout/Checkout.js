// import "./Checkout.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { dataBase } from "../../services/firebase/index";
import Form from "./Form";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getQuantity, getTotal, clearCart, buyer } = useContext(CartContext);
  const navigate = useNavigate();

  const totalQuantity = getQuantity();
  const total = getTotal();

  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
          buyer,
          items: cart,
          totalQuantity,
          total,
          date: new Date(),
      };

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(dataBase, "products");

      const batch = writeBatch(dataBase);

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const noStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          noStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (noStock.length === 0) {
        await batch.commit();

        const orderRef = collection(dataBase, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        console.log(`El id de su orden es: ${orderAdded.id}`);

        clearCart();
        setOrderId(orderAdded.id);
        setOrderCreated(true);

      } else {
        console.log(
          `No hay stock suficiente para los siguientes productos: ${noStock.map(
            (item) => item.name
          )}`
        );
        alert(
          `No hay stock suficiente para los siguientes productos: ${noStock.map(
            (item) => item.name
          )}`
        );
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1 className="orderGenerating">Generando orden de compra...</h1>;
  }

  if (orderCreated) {
    return (
      <div className="orderDetail">
        <h1 className="orderSucceful">Orden generada con exito!</h1>
        <h2 className="orderSucceful">Gracias por tu  compra {buyer.firstName}</h2>
        <span className="orderId">El id de su orden es: {orderId}</span>
        <Link className="navbar-title btn btn-primary" to="/">
          Ir al catalogo
        </Link>
      </div>
    );
  }

  return (
    <div className="orderContainer">
      <h1 className="orderTitle">Datos para la entrega</h1>
      <Form createOrder={createOrder} className="paymentForm"/>
      <img src="./images/logoCyberX.jpg" alt="CyberX" className="logoNav" />
    </div>
  );
};

export default Checkout;
