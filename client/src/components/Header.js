import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      Cart: <AiOutlineShoppingCart />
      {0}
      <hr />
    </div>
  );
};

export default Header;
