// import React, { useEffect } from 'react';
import "./App.css";
import { getData } from "./utils/const";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./Components/Navbar/index.jsx";
import { HomeContainer } from "./containers/HomeContainer";
import { useState, useEffect } from "react";
function App() {
  const product = [
    {
      title: "Nike",
      precio: 2000,
      img: "./images/remera-nike.jpg",
      stock: 15
    },
    {
      title: "Adidas",
      precio: 5000,
      img: "./images/remera-adidas.jpg",
      stock: 13
    },
    {
      title: "Puma",
      precio: 3000,
      img: "./images/remera-puma.jpg",
      stock: 1
    },

    {
      title: "Under Armour",
      precio: 7000,
      img: "./images/remera-underarmour.jpg",
      stock: 56
    },
  ];

  const [productos, setProductos] = useState([])


  useEffect(() => {
    const waitForData = async () => {
      console.log(await getData('zapatillas'))
    }
    setProductos(waitForData())
  }, [])


  return (
    <div className="App">
      <NavbarComponent />
      <HomeContainer productData={product} />
    </div>
  );
}

export default App;
