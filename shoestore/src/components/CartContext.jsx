

case "ADD_TO_CART": {
      const updatedCartProducts = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCartProducts));
      return { cart: updatedCartProducts };
    }

    case "INITIALIZE_CART":
      return { cart: action.payload };
  }