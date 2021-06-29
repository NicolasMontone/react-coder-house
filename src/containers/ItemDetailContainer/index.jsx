import './styles.css'
import { useEffect, useState } from "react"
import { ItemDetail } from "../../Components/ItemDetail";
import { Container, Row } from "react-bootstrap";
export const ItemDetailContainer = () => {

    const axios = require('axios')

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        async function mercadoLibreData() {
            const response = await fetch('https://api.mercadolibre.com/items/MLA843591087?include_attributes=all');
            const data = await response.json()
            setTimeout(() => {
                setProducto(data)
            }, 3000)
        }
        mercadoLibreData()
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <ItemDetail producto={producto} />
                </Row>
            </Container>
        </>
    )
}


