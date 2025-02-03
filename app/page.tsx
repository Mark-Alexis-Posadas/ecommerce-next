import Link from "next/link";
import Buttons from "./components/buttons";
import ProductCard from "./components/product-card";

interface CardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products?limit=4");
  const products = await data.json();
  return (
    <div className="text-center mt-10 max-w-[1200px] m-auto">
      <h1 className="font-bold text-4xl my-3">Weekly featured products</h1>
      <div className="p-10 grid grid-cols-4 gap-3">
        {products.map((product: CardProps) => {
          const { id, image, title, category, price } = product;
          return (
            <div key={id} className="text-center group relative">
              <Link href={`/shop/${id}`}>
                <ProductCard
                  image={image}
                  title={title}
                  category={category}
                  price={price}
                />
              </Link>
              <Buttons className="text-white bg-green-500 p-2 rounded transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 top-1/2">
                Add to Cart
              </Buttons>
            </div>
          );
        })}
      </div>
    </div>
  );
}
