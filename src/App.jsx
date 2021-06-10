import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from  './Components/Navbar/navbar.jsx'
import { Card } from './Components/Card/index.jsx';
import { ItemListContainer } from './containers/ItemListContainer';
function App() {
  const product = [{title:'Nike', precio:2000}, {title:'Adidas', precio:5000}, {title:'Puma', precio:3000}, {title:'Under Armour', precio:7000}]
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer productData={product}/>
    </div>
  );
}

export default App;
