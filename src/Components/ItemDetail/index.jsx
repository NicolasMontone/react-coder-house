import { Spinner, Col, Row } from "react-bootstrap"
import { ItemCount } from "../ItemCount"
import { useContext } from "react"
import "./styles.css"
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({ product }) => {

    const cartContext = useContext(CartContext)

    const onAdd = qty => cartContext.addItem({ product }, qty)

    const fakeStock = {
        stock: 8
    }
    return (
        <div className="itemdetailDiv">
            {!product.img ?
                <div className="spinnerDetail">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                :

                <Row>
                    <Col>
                        <img src={product.img} alt="foto de producto" className="itemDetailImg" />
                    </Col>
                    <Col>
                        <h2>{product.title}</h2>
                        <h3>&#36;{product.price}</h3>
                        <ItemCount
                            stock={fakeStock.stock}
                            initial={1}
                            onAdd={onAdd}
                        ></ItemCount>

                    </Col>
                </Row>

            }
        </div>
    )
}
