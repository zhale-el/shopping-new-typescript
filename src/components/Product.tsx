import React from "react";
import { useCartContext } from "../context/CartCountext";
import { Card, Button } from "react-bootstrap";
export type ProductProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

const Product = ({ id, title, price, imgUrl }: ProductProps) => {
  const { getItemQty, addItem, decreaseItem, removeItem } = useCartContext();
  const qty = getItemQty(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        width="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column bg-dark">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-light">{title}</span>
          <span className="ms-2 text-light">$ {price}</span>
        </Card.Title>
        <div className="mt-auto">
          {qty === 0 ? (
            <Button className="w-100 btn-secondary" onClick={() => addItem(id)}>
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button className="btn-secondary" onClick={() => addItem(id)}>
                  +
                </Button>
                <span className="fs-5 m-3 text-light">{qty}</span>
                <Button
                  className="btn-secondary"
                  onClick={() => decreaseItem(id)}
                >
                  -
                </Button>
              </div>
              <Button
                className="btn-secondary"
                size="sm"
                onClick={() => removeItem(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
