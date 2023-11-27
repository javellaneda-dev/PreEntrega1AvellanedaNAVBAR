
import './App.css';
import Navbar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/NavBar/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />

    </div>
  );
}

export default App;

