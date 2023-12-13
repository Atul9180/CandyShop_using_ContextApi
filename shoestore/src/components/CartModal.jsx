import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const CartModal = (props) => {
  return (
    <Modal
      {...props}
      className="w-[60vw]"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-2">
          <Col>{item.name}</Col>
          <Col>
            {item.sizes.lSize}x L {item.sizes.mSize}x M {item.sizes.sSize}xS
          </Col>
          <Col>{item.totalPrice}</Col>
        </Row>

        <Row className="flex min-w-full justify-end">Total: Rs. ${0}</Row>
      </Modal.Body>
      <Modal.Footer>
        <Button>Place Order</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
