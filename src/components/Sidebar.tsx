import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartCountext";
import CartItem from "./CartItem";

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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
