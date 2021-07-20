import './style.css'
import { Item } from "../../Components/Item/Index"
import { Container, Row, Col } from "react-bootstrap"
export const ItemList = ({ productosList, categoria }) => {
  return (
    <section>
      <Container>
        <h1 className="itemListTitle">{categoria}</h1>
        <Row>
          {productosList.map((element, index) => {
            return (
              <Col xs={4} key={index}>
                <Item
                  img={element.url}
                  title={element.name}
                  price={element.price}
                  id={element.id}
                ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
