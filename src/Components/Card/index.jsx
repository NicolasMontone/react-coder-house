import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "../ItemCount/"
import "./styles.css"
export const Card = ({ productos }) => {
  const onAdd = (num) => {
    alert(`agregaste ${num} productos al carrito`)
  }
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={productos.img} className="card-img-top" alt="Remera hombre" />
      <div className="card-body">
        <h5 className="card-title">{productos.title}</h5>
        <p className="card-text">{productos.precio}</p>
        <ItemCount stock={productos.stock} onAdd={onAdd} initial={1} />
      </div>
    </div>
  );
};
