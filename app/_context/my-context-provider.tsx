"use client";
import { useState, ReactNode } from "react";
import MyContext from "./my-context";
import { CartProduct } from "../types/category-sidebar";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [cartProduct, setCartProduct] = useState<CartProduct[]>([]);

  const handleAddToCartProduct = (product: CartProduct) => {
    setCartProduct([...cartProduct, product]);
    console.log(cartProduct);
  };

  return (
    <MyContext.Provider value={{ cartProduct, handleAddToCartProduct }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
