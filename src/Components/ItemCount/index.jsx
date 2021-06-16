import React, { useState } from 'react'


export const ItemCount = ({stock})=>{
    const [counter,setCounter] = useState(1)
    const restar = ()=>{
        if(counter> 1)
        setCounter(counter-1)
    }
    const sumar = ()=>{
        if(counter < stock){
            setCounter(counter+1)
        }
    }
    const manualChange = (e)=>{
       let value = e.target.value
       if(value > stock){
           setCounter(stock)
       } else{
           setCounter(value)
       }
    }
    return (
        <div>
            <button onClick={restar}>-</button>
            <input type="number" value={counter} onChange={manualChange}/>
            <button onClick={sumar}>+</button>
        </div>)}