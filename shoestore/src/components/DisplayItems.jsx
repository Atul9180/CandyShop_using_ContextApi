import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import { useCartContext } from "./CartContext";
import { useProductContext } from "./ProductContext";

const DisplayItems = () => {
  const { state: productState } = useProductContext();
  const { dispatch: cartDispatch } = useCartContext();

  const handleLSize = (e) => {};
  const handleSSize = (e) => {};
  const handleMSize = (e) => {};

  const handleAddToCart = (product) => {
    const cartItem = {
      nsme: product.name,
      price: product.price,
    };
  };

  return (
    <div className="container p-5">
      {productState.map((product, index) => (
        <Row key={index}>
          <Col className="d-flex flex-col gap-3 justify-between">
            <div>{product.name}</div>
            <div>{product.decription}</div>
            <div>{product.price}</div>
          </Col>
          <Col className="d-flex flex-col gap-3 justify-between">
            <Button onClick={handleLSize} variant="primary">
              Small {product.sizes.small}
            </Button>
            <Button onClick={handleLMize} variant="primary">
              Medium {product.sizes.medium}
            </Button>
            <Button onClick={handleSSize} variant="primary">
              Large {product.sizes.large}
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default DisplayItems;
