import "./Cart.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'

const CartView = () => {
  const { cart, removeItem, clearCart, getQuantity, addQuantity, lessQuantity } = useContext(CartContext);

  let prodInCart = getQuantity();

  console.log("hay", prodInCart, "en el carrito");

  return (
    <div className="cartView">
      {cart.length === 0 ? (
        <div className="cartEmpty">
          <h1>No hay articulos en el carrito</h1>
          <Link className="btn btn-primary" to="/">Volver al Catalogo</Link>
        </div>
      ) : (
        <div className="cart">
          
          <table className="tableCart">
            <thead>
              <tr>
                <th />
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>

            <tbody style={{ textTransform: "uppercase" }}>
              {cart.map((product) => (
                <tr key={product.id} className="rowProd">
                  <td className="imgContainer">
                    <img
                      src={product.img}
                      alt={product.name}
                      style={{ width: 215, height: 150 }}
                    ></img>
                  </td>

                  <td>{product.name}</td>
                  <td>$ {product.price}</td>
                  
                  <td className="btnTableCount">
                    <button disabled={product.quantity <= 1} onClick={() => lessQuantity(product.id)}>{" "}-{" "}</button>

                    {" "}{product.quantity}{" "}

                    <button disabled={product.quantity >= product.stock} onClick={() => addQuantity(product.id)}>{" "}+{" "}</button>
                  </td>

                  <td>$ {product.price * product.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(product.id)} className="btn btn-eliminar"><FaTrashAlt /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cartFooter">
            <h3>Total: ${" "} {cart.reduce((acc, product) => acc + product.price * product.quantity, 0 )}</h3>
            <button onClick={clearCart} className="btn btn-vaciar">Vaciar carrito</button>
            <button className="btn btn-finalizar btn-success">
              <Link style={{ textDecoration: "none", color: "#000" }} className="botonPago" to="/checkout">Finalizar compra</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
