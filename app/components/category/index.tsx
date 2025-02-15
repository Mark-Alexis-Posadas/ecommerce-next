"use client";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import ProductList from "../product-list";
import CategorySidebar from "../category-sidebar";

export default function Category() {
  const params = useParams();
  let categoryName = params.categoryName;

  // Ensure categoryName is a string, or handle the case of a string array.
  if (Array.isArray(categoryName)) {
    categoryName = categoryName[0]; // Choose the first category if it's an array
  }

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex">
      <CategorySidebar categories={categories} />
      <div className="flex">
        <Suspense fallback={<Loading />}>
          <ProductList category={categoryName || null} />
        </Suspense>
      </div>
    </div>
  );
}
