import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item = ({ title, img, price, id }) => {
    return (

        <Card style={{ width: "15rem" }}>
            <Link to={`/item/${id}`}>
                <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body>
                <Card.Title>{title.length > 50 ? title.substring(0, 50) + "..." : title}</Card.Title>
                <hr />
                <h3>Precio: ${price}.00</h3>
                <Button variant="outline-primary" className="m-1">Comprar</Button>
                <Button variant="outline-info" as={Link} to={`/item/${id}`} className="m-1">Detalle</Button>
            </Card.Body>
        </Card>

    );
};
