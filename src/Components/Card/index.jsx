import "bootstrap/dist/css/bootstrap.min.css";
import {ItemCount} from "../ItemCount/"
export const Card = (props) => {
  function saludar() {
    alert("hola");
  }
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.img} className="card-img-top" alt="Remera hombre" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.precio}</p>
        <ItemCount stock={props.stock}/>
        <button className="btn btn-primary">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};
