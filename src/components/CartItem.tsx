import React from "react";
import { Stack, Button } from "react-bootstrap";
import productItem from "../data/products.json";
import { useCartContext } from "../context/CartCountext";

type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeItem } = useCartContext();

  const product = productItem.find((item) => item.id === id);
  if (product == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto text-dark">
        <div>
          {product.title}{" "}
          {qty > 1 && <span style={{ fontSize: "18px" }}>{qty}</span>}
        </div>
        <div>{product.price * qty}</div>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => removeItem(product.id)}
        >
          remove
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
