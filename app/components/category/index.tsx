import { Suspense } from "react";
import Loading from "@/app/loading";
import ProductList from "../product-list";

export default function Category({
  selectedCategory,
}: {
  selectedCategory: string | null;
}) {
  return (
    <div>
      <div className="flex">
        <Suspense fallback={<Loading />}>
          <ProductList category={selectedCategory} />
        </Suspense>
      </div>
    </div>
  );
}
