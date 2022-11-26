import './App.css';
import {ItemListContainer} from "./components/itemListContainer/itemListContainer";
import {NavBar} from "./components/navBar/NavBar";

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"BIENVENIDO AL MÁS RÁPIDO DEL OESTE"} />
    </div>
  );
  
}

export default App;



