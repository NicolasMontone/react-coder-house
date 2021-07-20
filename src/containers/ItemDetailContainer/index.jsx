import './styles.css'
import { useEffect, useState, useContext } from "react"
import { ItemDetail } from "../../Components/ItemDetail";
import { Container, Spinner } from "react-bootstrap";
// import { getItem } from '../../utils/api';
import { useParams } from "react-router-dom"
import { CartContext } from '../../context/CartContext';
export const ItemDetailContainer = () => {

    const productContext = useContext(CartContext)
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setProducto(productContext.getProductoById(id))
    }, [id, productContext]);

    // useEffect(() => {
    //     async function mercadoLibreData() {
    //         const response = await getItem(id);
    //         setTimeout(() => {
    //             let aux = {
    //                 id: response.id,
    //                 img: response.pictures[0].url,
    //                 title: response.title,
    //                 price: response.price
    //             };
    //             setProducto(aux);
    //         }, 1000);
    //     };
    //     mercadoLibreData()
    // }, [id])

    return (
        <>
            <Container className="itemDetailContainer">
                <>
                    {!producto ? <Spinner /> : (
                        <ItemDetail
                            product={producto}
                        />
                    )}
                </>
            </Container>
        </>
    )
}


