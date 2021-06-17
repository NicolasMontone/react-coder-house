
import { Card } from "../../Components/Card";
import { Container, Row, Col } from "react-bootstrap"

export const HomeContainer = (props) => {
  return (
    <section>
      <Container>
        <Row>
          {props.productData.map((product) => {
            return (

              <Col>
                <Card
                  title={product.title}
                  precio={product.precio}
                  img={product.img}
                  stock={product.stock}
                />
              </Col>

            );
          })}
        </Row>
      </Container>
    </section>
  );
};
