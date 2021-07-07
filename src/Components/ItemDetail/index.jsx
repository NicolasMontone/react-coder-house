import { Link } from "react-router-dom"
import { Spinner, Col, Row, Button } from "react-bootstrap"
import { ItemCount } from "../ItemCount"
import { useState } from "react"
import "./styles.css"
export const ItemDetail = ({ title, img, price, stock = 10 }) => {

    const [amount, setAmount] = useState(0);
    const onAdd = (num) => {
        setAmount(amount + num)
    }
    return (
        <>
            {!img ? <Spinner />
                :
                <div className="itemDetailContainer">
                    <Row>
                        <Col>
                            <img src={img} alt="foto de producto" className="itemDetailImg" />
                        </Col>
                        <Col>
                            <h2>{title}</h2>
                            <h3>&#36;{price}</h3>
                            {amount > 0 ?
                                <>
                                    <Link to="/cart">
                                        <Button variant="primary">Terminar compra</Button>
                                    </Link>
                                    <Button variant="secondary" onClick={() => setAmount(0)}>Reset</Button>
                                </>
                                :
                                <ItemCount
                                    stock={stock}
                                    initial={1}
                                    onAdd={onAdd}
                                ></ItemCount>}
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}
