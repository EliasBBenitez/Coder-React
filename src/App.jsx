import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Hola, bienvenido a mi tienda en línea!" />
    </div>
  );
}

export default App;

