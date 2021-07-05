import './styles.css'
import { useEffect, useState } from "react"
import { ItemDetail } from "../../Components/ItemDetail";
import { Container, Spinner } from "react-bootstrap";
import { getItem } from '../../utils/api';
import { useParams } from "react-router-dom"
export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();
    const { id } = useParams();
    useEffect(() => {
        async function mercadoLibreData() {
            const response = await getItem(id);
            setTimeout(() => {
                let aux = {
                    idProd: response.id,
                    img: response.thumbnail,
                    title: response.title,
                    price: response.price
                };
                setProducto(aux);
            }, 2000);
        };
        mercadoLibreData()
    }, [id])
    return (
        <>
            <Container>
                <>
                    {producto ? (
                        <ItemDetail
                            img={producto.img}
                            title={producto.title}
                            price={producto.price}
                        />
                    ) : <Spinner />}
                </>
            </Container>
        </>
    )
}


