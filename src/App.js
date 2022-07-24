// import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import Counter from './Componentes/Counter/Counter'


function App() {

  const handleOnAdd = (quantity) => {
    console.log(`productos en el cart: ${quantity}`)
  }

  return (
    
    <div className="App">
      <Navbar/>
      
      <a
          className="App-link"
          href="https://github.com/Melldy-Monteverde/projectreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          visita el repo de este proyecto!
      </a>

      <ItemListContainer greeting="CyberX tienda Gamer"/>

      <Counter stock={10} onAdd={handleOnAdd}/>

    </div>
  );
}

export default App;
