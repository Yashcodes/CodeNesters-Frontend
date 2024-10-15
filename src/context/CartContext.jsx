import { createContext, useEffect, useState } from "react";
import { useAuth } from "./Auth";

const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [ auth ] = useAuth();

  useEffect(() => {
    
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
