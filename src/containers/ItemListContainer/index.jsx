import { Card } from "../../Components/Card"

export const ItemListContainer = (props) =>{
    return (
         <>
         {props.productData.map((product)=>{
             return(
                 <Card
                 title= {product.title}
                 precio= {product.precio}
                 />
             )
         })}
         </>
    )
}