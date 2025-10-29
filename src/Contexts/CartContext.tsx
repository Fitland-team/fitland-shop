import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { product } from "../api/products";

type CartProduct = product & { count: number };

type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [cart, setCart] = useState<CartProduct[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartProduct) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, count: p.count + product.count } : p
        );
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const increaseCount = (id: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decreaseCount = (id: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count > 1 ? p.count - 1 : 1 } : p
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseCount, decreaseCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart باید داخل CartProvider استفاده شود");
  return context;
};
