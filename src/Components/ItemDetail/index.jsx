import { ItemCount } from "../ItemCount"
import { Spinner, Image, Col, Row } from "react-bootstrap"
export const ItemDetail = ({ title, img, price }) => {
    const onAdd = (num) => {
        alert(`agregaste ${num} productos al carrito`)
    }
    return (
        <>
            {!img ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
                :
                <div>
                    <Row>
                        <Col>
                            <img src={img} alt="foto de producto" />
                        </Col>
                        <Col>
                            <h2>{title}</h2>
                            <h3>&#36;{price}</h3>
                            <ItemCount initial={1} onAdd={onAdd} />
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}
