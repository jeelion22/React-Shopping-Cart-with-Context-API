import "bootstrap/dist/css/bootstrap.css";

import Cart from "./Cart";
import { CartProvider } from "./CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default App;
