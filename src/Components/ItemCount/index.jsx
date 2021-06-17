import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(1)
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
        </div>)
}