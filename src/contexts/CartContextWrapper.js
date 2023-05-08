import { createContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext();

const CartContextWrapper = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;
