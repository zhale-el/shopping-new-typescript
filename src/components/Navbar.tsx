import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <NavbarBs className="bg-dark text-light mb-3">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="text-light link_none">
            Home
          </NavLink>

          <NavLink to="/shop" className="text-light link_none">
            Shop
          </NavLink>

          <NavLink to="/about" className="text-light link_none">
            About
          </NavLink>
        </Nav>
        <Button variant="outline-light" className="btn-shop">
          <MdOutlineShoppingCart />
          <div className="rounded-circle d-flex justify-content-center align-items-center number">
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
