import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useCartContext } from "../context/CartCountext";
type TSidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: TSidebarProps) => {
  const { closeCart } = useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-dark">Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default Sidebar;
