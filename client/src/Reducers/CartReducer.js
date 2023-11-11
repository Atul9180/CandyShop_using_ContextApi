const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCartItem = state.find(
        (item) => item.CandyName === action.payload.CandyName
      );
      if (existingCartItem) {
        return state.map((item) =>
          item.CandyName === action.payload.CandyName
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [
          ...state,
          {
            CandyName: action.payload.CandyName,
            quantity: action.payload.quantity,
          },
        ];
      }
    default:
      return state;
  }
};

export default CartReducer;
