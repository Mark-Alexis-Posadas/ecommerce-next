"use client";

import { useParams } from "next/navigation"; // Import useParams from next/navigation
import Category from "@/app/components/category";

export default function CategoryPage() {
  const params = useParams();
  const categoryName = params.categoryName;

  return (
    <section className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Browse Products</h1>
      <Category selectedCategory={categoryName} />
    </section>
  );
}
