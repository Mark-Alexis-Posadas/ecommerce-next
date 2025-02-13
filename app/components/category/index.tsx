"use client";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";
import ProductList from "../product-list";
import CategorySidebar from "../category-sidebar";

export default function Category() {
  const params = useParams();
  const categoryName = params.categoryName;
  const [categories, setCategories] = useState([]);

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
          <ProductList category={categoryName} />
        </Suspense>
      </div>
    </div>
  );
}
