import { Form, Container } from "react-bootstrap"
import { CartContext } from '../../context/CartContext'
import { useState, useContext } from "react"


export function FormComponent() {

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    const { createOrder } = useContext(CartContext)

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onInput={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onInput={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" onInput={(e) => { setPhone(e.target.value) }} placeholder="Enter your number" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => createOrder(name, email, phone)}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}