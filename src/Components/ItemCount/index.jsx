import './styles.css'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const ItemCount = ({ stock, onAdd, initial }) => {

    const [counter, setCounter] = useState(initial)

    const restar = () => {
        if (counter > 1)
            setCounter(counter - 1)
    }

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const manualChange = (e) => {
        let value = e.target.value
        if (value > stock) {
            setCounter(stock)
        } else {
            setCounter(value)
        }
    }

    return (
        <div>
            <Button variant="outline-primary" onClick={restar}>-</Button>
            <input type="number" value={counter} onChange={manualChange} />
            <Button variant="outline-primary" onClick={sumar}>+</Button>
            <Button className="btn btn-primary buyNow" onClick={() => onAdd(counter)}>
                Agregar al carrito
            </Button>
            <Link to="/cart">
                <Button className="ms-2 buyNow">Ir al Carrito</Button>
            </Link>
        </div>)
}