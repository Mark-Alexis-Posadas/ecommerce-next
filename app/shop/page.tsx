import { Suspense } from "react";

import Category from "../components/category";

export default function Shop() {
  return (
    <section className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Browse Products</h1>
      <Category />
    </section>
  );
}
