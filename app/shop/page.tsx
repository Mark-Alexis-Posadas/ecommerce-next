import { Suspense } from "react";

import ProductList from "../components/product-list";
import Loading from "../loading";

export default async function Shop() {
  return (
    <section className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Browse Products</h1>
      <div className="flex">
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>
      </div>
    </section>
  );
}
