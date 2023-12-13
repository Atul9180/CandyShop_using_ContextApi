import React, { useEffect, useContext, createContext, useReducer } from "react";

const initialState = {
  products: [],
};

//reducerFn:
const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const updatedProducts = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }

    case "INITIALIZE_PRODUCTS":
      return { products: action.payload };
  }
};

// Create ProductContext
const ProductContext = createContext();

// ProductProvider Component to Wrap Your App
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      dispatch({ type: "INITIALIZE_PRODUCTS", payload: storedProducts });
    }
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
// Custom Hook to use ProductContext
export const useProductContext = () => {
  return useContext(ProductContext);
};
