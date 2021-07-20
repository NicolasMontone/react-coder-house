import React, { useContext, useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./styles.css"

export const Cart = () => {
    const { carrito, eliminarTodo, removeItem, totalPrice } = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
    const venta = [{ buyer, item: carrito, price: totalPrice }]
    return (
        <>
            {carrito.length === 0 ? <h1>No productos :P, <Link to={"/"}>volver al home</Link></h1> :
                (<Container >
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
                        <div>
                            <input type="text" placeholder="name" onInput={(e) => { setBuyer({ ...buyer, name: e.target.value }) }} />
                            <input type="email" placeholder="email" value={setBuyer.email} onInput={(e) => { setBuyer({ ...buyer, email: e.target.value }) }} />
                            <input type="tel" placeholder="number" value={setBuyer.number} onInput={(e) => { setBuyer({ ...buyer, number: e.target.value }) }} />
                            <Button onClick={() => console.log(`${buyer.name} compró por un precio de $${totalPrice}, ${venta}`)} className="vaciarCarrito">Terminar compra</Button>
                        </div>
                        <Button onClick={eliminarTodo} className="vaciarCarrito">Vaciar Carrito</Button>

                    </Row>
                </Container>)
            }

        </>
    )
}