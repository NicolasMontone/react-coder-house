import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./Components/Navbar/index.jsx";
import { HomeContainer } from "./containers/HomeContainer";
function App() {

  return (
    <div className="App">
      <NavbarComponent />
      <HomeContainer />
    </div>
  );
}

export default App;
