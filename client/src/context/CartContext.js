import React, { useEffect, createContext, useReducer } from "react";
import CartReducer from "../Reducers/CartReducer";

const CartContext = createContext();
const initialCart = JSON.parse(localStorage.getItem("items")) || [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
