import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CandyItemsList = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleAddToCart = (CandyName, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { CandyName, quantity } });
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.CandyName}>
          <div>
            <strong>CandyName: </strong>
            {item.CandyName} |<strong>CandyDescription: </strong>
            {item.CandyDescription} |<strong>CandyPrice: </strong>
            {item.CandyPrice}
          </div>

          <div>
            <button onClick={() => handleAddToCart(item.CandyName, 1)}>
              Buy 1
            </button>
            <button onClick={() => handleAddToCart(item.CandyName, 2)}>
              Buy 2
            </button>
            <button onClick={() => handleAddToCart(item.CandyName, 3)}>
              Buy 3
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandyItemsList;
