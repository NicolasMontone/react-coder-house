import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/api";
import { ItemList } from "../ItemList/index"
import { Spinner } from "react-bootstrap";


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        async function mercadoLibreData() {
            const response = await getData(categoryId);
            let data = response.map((element) => {
                return {
                    idProd: element.id,
                    img: element.thumbnail,
                    title: element.title,
                    price: element.price
                };
            });
            setProductos(data);
        };
        mercadoLibreData()
    }, [categoryId])
    return (
        <>
            {
                productos.length > 0 ? <ItemList productosList={productos} categoria={categoryId}></ItemList> :
                    <Spinner></Spinner>
            }
        </>
    )



}