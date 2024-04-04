import { createContext, useState } from "react";
import { data } from "./Data";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0.05); /**5% discount */
  const [totalAmt, setTotalAmt] = useState(0);
  return (
    <CartContext.Provider
      value={{ total, setTotal, data, discount, totalAmt, setTotalAmt }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
