import { Suspense } from "react";
import Loading from "../loading";
import Category from "../components/category";
import CategorySidebar from "../components/category-sidebar";

export default async function Shop() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  return (
    <section className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Shop Page</h1>
      <div className="flex">
        <CategorySidebar categories={categories} />
        <Suspense fallback={<Loading />}>
          <Category />
        </Suspense>
      </div>
    </section>
  );
}
