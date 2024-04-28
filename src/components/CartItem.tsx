import React from "react";
import { Stack } from "react-bootstrap";
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
    <Stack direction="horizontal" gap={2}>
      <img
        src={product.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
};

export default CartItem;
