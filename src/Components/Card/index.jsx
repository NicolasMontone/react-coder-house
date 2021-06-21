import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "../ItemCount/"
import "./styles.css"
export const Card = ({ productos }) => {

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={productos.img} className="card-img-top" alt="Remera hombre" />
      <div className="card-body">
        <h5 className="card-title">{productos.title}</h5>
        <p className="card-text">{productos.precio}</p>
        <ItemCount stock={productos.stock} />
        <button className="btn btn-primary">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};
