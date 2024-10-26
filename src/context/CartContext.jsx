import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./Auth";

const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState("");
  const [auth] = useAuth();

  const addCartToContext = async (data) => {
    setCart(data);
  };

  useEffect(() => {}, []);
  return (
    <CartContext.Provider value={{ cart, setCart, addCartToContext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
