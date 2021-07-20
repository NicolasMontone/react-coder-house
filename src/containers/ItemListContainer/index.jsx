import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/index"
import { Spinner } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([])
    const { categoryId } = useParams()
    const productContext = useContext(CartContext);
    useEffect(() => {
        setProductos(productContext.getProductosByCategory(categoryId));
        setCategorias(productContext.getCategorias())
    }, [categoryId]);

    useEffect(() => {
        const prod = productContext.listProducts;
        let data = prod.map((element) => {
            return {
                idProd: element.id,
                img: element.url,
                title: element.name,
                price: element.price
            };
        });
        setProductos(data)
    })
    // useEffect(() => {
    //     async function mercadoLibreData() {
    //         const response = await getData(categoryId);
    //         let data = response.map((element) => {
    //             return {
    //                 idProd: element.id,
    //                 img: element.thumbnail,
    //                 title: element.title,
    //                 price: element.price
    //             };
    //         });
    //         setProductos(data);
    //     };
    //     mercadoLibreData()
    // }, [categoryId])
    return (
        <>

            {
                productos.length > 0 ? <ItemList productosList={productos} categoria={categoryId}></ItemList> :
                    <Spinner></Spinner>
            }
        </>
    )



}