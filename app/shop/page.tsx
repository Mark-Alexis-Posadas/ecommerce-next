import Link from "next/link";
import ProductCard from "../components/product-card";

interface CardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export default async function Shop() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <div className="p-10 grid grid-cols-4 gap-3">
      {products.map((product: CardProps) => {
        const { id, image, title, category, price } = product;
        return (
          <Link href={`/shop/${id}`} key={id}>
            <ProductCard
              image={image}
              title={title}
              category={category}
              price={price}
            />
          </Link>
        );
      })}
    </div>
  );
}
