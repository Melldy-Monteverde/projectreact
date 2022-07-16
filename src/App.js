// import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primer desafio melldy monteverde!
        </p>
        <a
          className="App-link"
          href="https://github.com/Melldy-Monteverde/projectreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          visita el repo de este proyecto!
        </a>
      </header> */}
      <Navbar/>
      {/* counter */}
      <ItemListContainer greeting="CyberX tienda Gamer"/>
    </div>
  );
}

export default App;
