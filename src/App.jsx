import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './containers/Home/Index'
import { NavbarComponent } from "./Components/Navbar/index.jsx";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/index"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { CartComponentContext } from "./context/CartContext";
import { Cart } from "./Components/Cart/index"
function App() {
  return (
    <CartComponentContext>


      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/item/:id" component={ItemDetailContainer}></Route>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={() => <h1>Error 404</h1>} />
        </Switch>
      </BrowserRouter>


    </CartComponentContext>
  );
}

export default App;
