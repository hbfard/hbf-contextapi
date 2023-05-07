import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextWrapper = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;
