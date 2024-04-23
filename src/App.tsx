import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
