import { Col } from "react-bootstrap"
import { ItemCount } from "../ItemCount"
export const ItemDetail = ({ producto }) => {
    const onAdd = (num) => {
        alert(`agregaste ${num} productos al carrito`)
    }
    return (
        <>
            <Col>
                <img src={producto.pictures[0].url} alt="Foto producto" />
            </Col>
            <Col>
                <h2>{producto.title}</h2>
                <h3>&#36;{producto.price}</h3>
                <ItemCount initial={1} onAdd={onAdd} />
            </Col>
        </>
    )
}