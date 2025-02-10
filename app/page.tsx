import { Suspense } from "react";
import Loading from "./loading";
import ProductList from "./components/product-list";

export default function Home() {
  return (
    <div className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Weekly featured products</h1>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
