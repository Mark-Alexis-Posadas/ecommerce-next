"use client";
import { useState, ReactNode } from "react";
import MyContext from "./my-context";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [cartProduct, setCartProduct] = useState([]);

  const handleAddToCartProduct = (product: string[]) => {
    setCartProduct((prev) => [...prev, product]);
  };

  return (
    <MyContext.Provider value={{ cartProduct, handleAddToCartProduct }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
