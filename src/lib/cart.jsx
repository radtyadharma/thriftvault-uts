import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "./products";

export const ONGKIR = 15000;

const CartCtx = createContext({
  items: [],
  add: () => {},
  remove: () => {},
  total: 0,
});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const add = (p) =>
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === p.id);
      if (found)
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { product: p, qty: 1 }];
    });
  const remove = (id) =>
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return (
    <CartCtx.Provider value={{ items, add, remove, total }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCart = () => useContext(CartCtx);
export const SAMPLE = PRODUCTS;
