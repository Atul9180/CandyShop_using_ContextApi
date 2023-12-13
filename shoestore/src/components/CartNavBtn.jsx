import React from "react";
import Button from "react-bootstrap/Button";

import CartModal from "./CartModal.jsx";

const CartNavBtn = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Cart (0)
      </Button>

      <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartNavBtn;
