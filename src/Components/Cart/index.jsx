import React, { useContext } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./styles.css"

export const Cart = () => {
    const { carrito, eliminarTodo, removeItem, totalPrice } = useContext(CartContext)
    return (
        <>
            {carrito.length == 0 ? <h1>No productos :P, <Link to={"/"}>volver al home</Link></h1> : (<Container >
                <Row className="cartConatiner" >

                    {carrito.map((item, index) => {
                        return (
                            <>
                                <div className="itemCart">
                                    <p className="cartText" key={index}>{item.title} - Precio: {item.price} - Cantidad: {item.quantity}</p>
                                    <Button onClick={() => removeItem(index)}>X</Button>
                                </div>
                            </>
                        );
                    })}
                    <div><p>Precio: ${totalPrice}</p> </div>
                    <Button onClick={eliminarTodo} className="vaciarCarrito">Vaciar Carrito</Button>
                </Row>
            </Container>)}

        </>
    )
}