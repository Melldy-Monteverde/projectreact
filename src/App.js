import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrinc from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import CartView from './Componentes/CarView/Cart'
import Checkout from './Componentes/Checkout/Checkout'

function App() {

    return (
    
    <div className="App continer">
       <CartContextProvider>
        <BrowserRouter>
          <NavbarPrinc />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Wellcome to CyberX Game store' />} />
            <Route path="/categoria/:categoryID" element={<ItemListContainer greeting='Productos filtrados' className="title"/>} />
            <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={
              <div className='container404'>
                <h1 className="errorText">404 - Página no encontrada</h1>
                <img src='./images/logoCyberX.jpg' alt='CyberX' className="logoNav"/>
              </div>} />
          </Routes>
        </BrowserRouter>
       </CartContextProvider>
    </div>
  );
}

export default App;
