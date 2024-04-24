// 1
import { createContext, useContext, ReactNode } from "react";

//5
type CartProviderProps = {
  children: ReactNode;
};

// 2
const CartContext = createContext({});

// 3
export function useCartContext() {
  return useContext(CartContext);
}

//4
export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

//6 import CartProveder to App.tsx
