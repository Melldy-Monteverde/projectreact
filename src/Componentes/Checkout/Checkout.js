import "./Checkout.css";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { dataBase } from "../../services/firebase/index";
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
  const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const totalQuantity = getQuantity();
  const total = getTotal();

  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const createOrder = async () => {
    setIsLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: data.nombre,
          lastName: data.apellido,
          phone: data.telefono,
          address: data.direccion,
          email: data.email,
        },
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

        // setTimeout(() => {
        //   navigate("/");
        // }, 3000);
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
        //  agregar un link de volver a carrito para sacar el item sin stock del carrito
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
        <h1 className="orderSucceful">
          Orden generada con exito!
        </h1>
        <span className="orderId">El id de su orden es: {orderId}</span>
        <Link className="navbar-title btn btn-primary" to='/'>Ir al catalogo</Link>
      </div>
    );
  }

  return (
    <div className="orderContainer">
      <h1 className="orderTitle">Datos para la entrega</h1>
      <form onSubmit={handleSubmit} className="paymentForm">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={data.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={data.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Correo"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="telefono"
          placeholder="Teléfono"
          value={data.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={data.direccion}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={createOrder} className="btn btn-success">
          Generar Orden
        </button>
      </form>
      <img src="./images/logoCyberX.jpg" alt="CyberX" className="logoNav" />
    </div>
  );
};

export default Checkout;
