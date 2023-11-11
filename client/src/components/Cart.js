import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ onClose }) => {
  const { cart } = useContext(CartContext);

  const handleDecrement = () => {
    console.log("first");
  };

  return (
    <div>
      <button onClick={onClose}>Close Cart</button>
      <div>
        {cart.map((item) => (
          <div key={item.CandyName}>
            <div>
              <strong>Name:</strong> {item.CandyName} |{" "}
              <strong>Quantity:</strong> {item.CandyQuantity} |{" "}
              <strong>Total Price:</strong>{" "}
              {item.CandyPrice * item.CandyQuantity}
            </div>

            <div>
              <button onClick={() => handleDecrement(item.CandyName)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
