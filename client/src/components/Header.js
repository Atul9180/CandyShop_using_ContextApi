import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <button onCick={() => setIsCartOpen(!isCartOpen)}>
        <AiOutlineShoppingCart />
        {totalItems}
      </button>
      <hr />

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Header;
