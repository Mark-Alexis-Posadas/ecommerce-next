"use client";

import { useParams } from "next/navigation";
import ProductList from "../product-list";

// import { Product } from "@/app/types/category-sidebar";
export default function Category() {
  const params = useParams();
  let categoryName = params.categoryName;

  if (Array.isArray(categoryName)) {
    categoryName = categoryName[0];
  }

  return <ProductList category={categoryName || null} />;
}
