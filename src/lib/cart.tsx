import { createContext, useContext, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  total: number;
};

const Ctx = createContext<CartCtx>({
  items: [],
  add: () => {},
  remove: () => {},
  total: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const add = (p: Product) =>
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === p.id);
      if (found)
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { product: p, qty: 1 }];
    });
  const remove = (id: string) =>
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return <Ctx.Provider value={{ items, add, remove, total }}>{children}</Ctx.Provider>;
}

export const useCart = () => useContext(Ctx);
export const ONGKIR = 15000;
export const SAMPLE = PRODUCTS;
