import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import "./styles.css"



export const Home = () => {
    const estadoGlobal = useContext(ShopContext)
    console.log(estadoGlobal)
    return (
        <div className="homeContainer">
            <h1 className="homeTitle">Monto Store</h1>
        </div>
    )
}