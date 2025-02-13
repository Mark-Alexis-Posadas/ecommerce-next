"use client";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategorySidebar({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("categoryName");
  console.log(categoryName);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [active, setActive] = useState<number>(-1);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productList = await response.json();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  // Filter products based on categoryName from URL
  useEffect(() => {
    if (categoryName) {
      const filtered = products.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);

      const activeIndex = categories.indexOf(categoryName);
      setActive(activeIndex);
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
    }
  }, [products, categoryName, categories]);

  // Handle category filter change
  const handleFilterCategory = (categoryName: string, index: number) => {
    setActive(index);

    if (categoryName === "All") {
      setFilteredProducts(products);
      router.push(`/shop`);
    } else {
      const filtered = products.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
      router.push(`/shop/category/${categoryName}`);
    }
  };

  return (
    <aside className="p-0 md:px-5 mb-5 md:mb-0">
      <ul className="flex md:flex-col md:gap-0 items-center md:items-start gap-4">
        <li
          key="all"
          className={`${
            active === -1 ? "text-green-600" : "text-gray-600"
          } my-2 cursor-pointer`}
          onClick={() => handleFilterCategory("All", -1)}
        >
          All
        </li>

        {categories.map((category, index) => (
          <li
            key={category} // Use the category name as the key here
            className={`${
              active === index ? "text-green-600" : "text-gray-600"
            } my-2 cursor-pointer`}
            onClick={() => handleFilterCategory(category, index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
