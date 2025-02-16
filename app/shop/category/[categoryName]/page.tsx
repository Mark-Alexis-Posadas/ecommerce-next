import Category from "@/app/components/category";
import CategorySidebar from "@/app/components/category-sidebar";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default async function CategoryPage() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  return (
    <section className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Browse Products</h1>
      <div className="flex flex-col lg:flex-row">
        <CategorySidebar categories={categories} />
        <Suspense fallback={<Loading />}>
          <Category />
        </Suspense>
      </div>
    </section>
  );
}
