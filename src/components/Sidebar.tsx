import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartCountext";
import CartItem from "./CartItem";
import productItem from "../data/products.json";

type TSidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: TSidebarProps) => {
  const { closeCart, cartItems } = useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-dark">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="fw-bold fs-5 text-dark">
            Total :{" "}
            {cartItems.reduce((total, currentItem) => {
              const product = productItem.find(
                (item) => item.id === currentItem.id
              );
              return total + (product?.price || 0) * currentItem.qty;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
