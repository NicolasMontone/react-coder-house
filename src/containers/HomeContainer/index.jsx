import { Card } from "../../Components/Card";

export const HomeContainer = (props) => {
  return (
    <section>
      {props.productData.map((product) => {
        return (
          <Card
            title={product.title}
            precio={product.precio}
            img={product.img}
            stock={product.stock}
          />
        );
      })}
    </section>
  );
};
