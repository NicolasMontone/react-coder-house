import { Col } from "react-bootstrap"
import { Card } from "../../Components/Card/index"
export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => {
                return (
                    <Col>
                        <Card
                            productos={producto} key={producto.id}
                        />
                    </Col>
                );
            })}
        </>
    )
}