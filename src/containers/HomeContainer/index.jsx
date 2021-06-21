import { ItemList } from "../ItemList/index"
import { Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";

export const HomeContainer = () => {
  const [productos, setProductos] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./dataJson/products.json');
      const data = await response.json();
      setProductos(data)
    }
    fetchData()
  }, [])
  return (
    <section>
      <Container>
        <Row>
          <ItemList productos={productos} />
        </Row>
      </Container>
    </section>
  );
};
