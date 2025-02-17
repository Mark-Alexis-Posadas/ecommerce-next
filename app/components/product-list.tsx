"use client";
import { useContext, useEffect, useState } from "react";
import Button from "./buttons";
import ProductCard from "./product-card";
import Link from "next/link";
import { CardProps, ProductListProps } from "../types/product-list";
import MyContext from "../_context/my-context";

export default function ProductList({ limit, category }: ProductListProps) {
  const [products, setProducts] = useState<CardProps[]>([]);
  const { handleAddToCartProduct } = useContext(MyContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://fakestoreapi.com/products${
          limit ? `?limit=${limit}` : ""
        }`;
        if (category) {
          url = `https://fakestoreapi.com/products/category/${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, limit]);

  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
      {products.map((product: CardProps) => {
        const { id, image, title, category, price } = product;
        return (
          <div key={id} className="text-center group relative">
            <Link href={`/shop/${id}`}>
              <ProductCard
                image={image}
                title={title}
                category={category}
                price={price}
              />
            </Link>
            <Button
              onClick={() => handleAddToCartProduct(product)}
              className="text-white bg-green-500 p-2 rounded transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 top-1/2"
            >
              Add to Cart
            </Button>
          </div>
        );
      })}
    </div>
  );
}
