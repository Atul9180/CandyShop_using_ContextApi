import "./App.css";
import CandyItemsList from "./components/CandyItemsList";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <CartContext>
      <Header />
      <ProductForm />
      <CandyItemsList />
    </CartContext>
  );
}

export default App;
