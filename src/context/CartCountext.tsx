// 1
import { createContext, useContext, ReactNode, useState } from "react";

//5
type CartProviderProps = {
  children: ReactNode;
};

//7
type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
};

// 9  baray dakhele sabd kharid
type CartItem = {
  id: number;
  qty: number;
};

// 2
const CartContext = createContext({} as CartContext); //8

// 3
export function useCartContext() {
  return useContext(CartContext);
}

//4
export function CartProvider({ children }: CartProviderProps) {
  //10 use state (dorst kardan ye faza baray maghadir delkhah)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 11 dorst kardan functions ke bala esme bordim

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }

  function addItem(id: number) {}

  return (
    <CartContext.Provider value={{ getItemQty }}>
      {children}
    </CartContext.Provider>
  );
}

//6 import CartProveder to App.tsx
