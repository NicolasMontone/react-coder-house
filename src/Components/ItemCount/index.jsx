import './styles.css'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

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
            <button className="btn btn-primary" onClick={() => { onAdd(counter) }}>
                Comprar ahora
            </button>
        </div>)
}