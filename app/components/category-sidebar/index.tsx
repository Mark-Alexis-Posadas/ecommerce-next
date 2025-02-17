"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CategorySidebarProps, Product } from "@/app/types/category-sidebar";

export default function CategorySidebar({ categories }: CategorySidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("categoryName");

  const [products, setProducts] = useState<Product[]>([]);
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [active, setActive] = useState<number>(-1);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productList = await response.json();
        setProducts(productList);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categoryName) {
      // const filtered = products.filter(
      //   (product) => product.category === categoryName
      // );
      // setFilteredProducts(filtered);

      const activeIndex = categories.indexOf(categoryName);
      setActive(activeIndex);
    }
    // } else {
    //   setFilteredProducts(products);
    // }
  }, [products, categoryName, categories]);

  // Handle category filter change
  const handleFilterCategory = (categoryName: string, index: number) => {
    setActive(index);

    if (categoryName === "All") {
      // setFilteredProducts(products);
      router.push(`/shop`);
    } else {
      // const filtered = products.filter(
      //   (product) => product.category === categoryName
      // );
      // setFilteredProducts(filtered);
      router.push(`/shop/category/${categoryName}`);
    }
  };

  return (
    <aside className="p-0 md:px-5 mb-5 md:mb-0">
      <ul className="flex flex-wrap p-5 md:p-0 md:flex-col md:gap-3 items-center md:items-start gap-2">
        <li
          key="all"
          className={`${
            active === -1 ? "text-green-600" : "text-gray-600"
          } md:my-2 cursor-pointer transition-colors duration-200 ease-in-out hover:text-green-500`}
          onClick={() => handleFilterCategory("All", -1)}
        >
          All
        </li>

        {categories.map((category: string, index: number) => (
          <li
            key={category}
            className={`${
              active === index ? "text-green-600" : "text-gray-600"
            } md:my-2 cursor-pointer transition-colors duration-200 ease-in-out hover:text-green-500`}
            onClick={() => handleFilterCategory(category, index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
