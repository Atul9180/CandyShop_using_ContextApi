import React from "react";
import Navbar from "react-bootstrap/Navbar";
import CartNavBtn from "../CartNavBtn";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ShowHouse
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <CartNavBtn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
