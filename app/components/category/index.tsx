"use client";
// import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProductList from "../product-list";
import CategorySidebar from "../category-sidebar";

export default function Category() {
  const params = useParams();
  let categoryName = params.categoryName;

  if (Array.isArray(categoryName)) {
    categoryName = categoryName[0];
  }

  return <ProductList category={categoryName || null} />;
}
