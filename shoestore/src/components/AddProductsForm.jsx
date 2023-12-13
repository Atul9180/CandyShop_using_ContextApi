import React, { useRef } from "react";
import { Button, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { useProductContext } from "./ProductContext";

const AddProductsForm = () => {
  const { dispatch } = useProductContext();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const LSizeRef = useRef();
  const MSizeRef = useRef();
  const SSizeRef = useRef();

  const emptyInputs = () => {
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = 0;
    LSizeRef.current.value = 0;
    MSizeRef.current.value = 0;
    SSizeRef.current.value = 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prdInput = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: parseInt(priceRef.current.value),
      sizes: {
        L: parseInt(LSizeRef.current.value) || 0,
        M: parseInt(MSizeRef.current.value) || 0,
        S: parseInt(SSizeRef.current.value) || 0,
      },
    };

    console.log({ prdInput });
    dispatch({ type: "ADD_PRODUCT", payload: prdInput });
    emptyInputs();
  };

  return (
    <Row className="container g-2  mt-3 mb-5 shadow-md">
      <Col sm>
        <FloatingLabel controlId="floatingInputGrid" label="ShoeName">
          <Form.Control
            type="text"
            ref={nameRef}
            placeholder="Enter ShoeName"
            required
          />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="ShoeDescription">
          <Form.Control
            type="text"
            ref={descriptionRef}
            placeholder="Enter ShoeDescription"
            required
          />
        </FloatingLabel>
      </Col>
      <Col sm>
        <FloatingLabel controlId="floatingInputGrid" label="ShoePrice (Rs.)">
          <Form.Control
            required
            type="number"
            ref={priceRef}
            min={10}
            placeholder="Rs. Price"
          />
        </FloatingLabel>
      </Col>
      <Col md className="g-1 d-flex">
        <FloatingLabel controlId="floatingInputGrid" label="L">
          <Form.Control type="number" ref={LSizeRef} min={0} placeholder="0" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="M">
          <Form.Control type="number" ref={MSizeRef} min={0} placeholder="0" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="S">
          <Form.Control type="number" ref={SSizeRef} min={0} placeholder="0" />
        </FloatingLabel>
      </Col>
      <Col xs>
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default AddProductsForm;
