// 1
import { createContext, useContext, ReactNode, useState } from "react";
import Sidebar from "../components/Sidebar";

//5
type CartProviderProps = {
  children: ReactNode;
};

//7
type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQty: number;
  cartItems: CartItem[];
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
  // for sidbar
  const [isOpen, setIsOpen] = useState(false);

  //10 use state (dorst kardan ye faza baray maghadir delkhah)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQty = cartItems.reduce((qty, item) => {
    return item.qty + qty;
  }, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // 11 dorst kardan functions ke bala esme bordim

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }

  function addItem(id: number) {
    const qty = getItemQty(id);

    if (qty === 0) {
      setCartItems([...cartItems, { id: id, qty: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    }
  }

  function removeItem(id: number) {
    setCartItems((cartItems) =>
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function decreaseItem(id: number) {
    const qty = getItemQty(id);
    if (qty === 1) {
      removeItem(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  }

  return (
    <CartContext.Provider
      value={{
        getItemQty,
        addItem,
        removeItem,
        decreaseItem,
        cartItems,
        cartQty,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Sidebar isOpen={isOpen} />
    </CartContext.Provider>
  );
}

//6 import CartProveder to App.tsx
