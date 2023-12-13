import React from "react";
import Header from "./components/Header/header";
import AddProductsForm from "./components/AddProductsForm";
import DisplayItems from "./components/DisplayItems";

function App() {
  return (
    <div className="App">
      <Header />
      <AddProductsForm />
      <DisplayItems />
    </div>
  );
}

export default App;
