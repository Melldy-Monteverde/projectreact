import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarPrinc from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
    
    <div className="App continer">
      <BrowserRouter>
        <NavbarPrinc/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Wellcome to CyberX Game store' />} />
          <Route path="/categoria/:categoryID" element={<ItemListContainer greeting='Productos filtrados' className="title"/>} />
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={
            <div className='container404'>
              <h1 className="errorText">404 - Página no encontrada</h1>
              <img src='./images/logoCyberX.jpg' alt='CyberX' className="logoNav"/>
            </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
