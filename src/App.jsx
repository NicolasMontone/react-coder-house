import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./Components/Navbar/index.jsx";
import { HomeContainer } from "./containers/HomeContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/index"
import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>

        {/* <Route exact path="/" component={HomeContainer} /> */}
        <Route exact path="/" component={ItemDetailContainer} />
        {/* <Route exact path="*" component={() => <h1>Error 404 paaa</h1>} /> */}


      </Switch>
    </BrowserRouter>
  );
}

export default App;
