import React, { useContext } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import "./styles.css"

export const Cart = () => {
    const { carrito, eliminarTodo, removeItem } = useContext(CartContext)
    return (
        <>

            <Container >
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

                    <Button onClick={eliminarTodo} className="vaciarCarrito">Vaciar Carrito</Button>
                </Row>
            </Container>
        </>
    )
}