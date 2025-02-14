import { Suspense } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "./loading";
import ProductList from "./components/product-list";
import { Section } from "./components/section";
import { Container } from "./components/container";
import { SubHeading } from "./components/heading/sub-heading";
import { bannerData } from "./_data/banner";
import { BannerCarousel } from "./components/banner";
import Link from "next/link";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await data.json();
  return (
    <>
      <Section>
        <Container>
          <BannerCarousel bannerData={bannerData} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SubHeading>Weekly featured products</SubHeading>
          <Suspense fallback={<Loading />}>
            <ProductList limit={4} />
          </Suspense>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubHeading>Categories</SubHeading>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category: string[], index: number) => (
              <Link href={`shop/category/${category}`} key={uuidv4()}>
                <div
                  key={uuidv4()}
                  className={`min-h-[300px] ${
                    index === 0
                      ? "bg-[url('/images/categories/electronics.jpg')]"
                      : index === 1
                      ? "bg-[url('/images/categories/jewelry.jpg')]"
                      : index === 2
                      ? "bg-[url('/images/categories/mens-clothing.jpg')]"
                      : "bg-[url('/images/categories/womens-clothing.jpg')]"
                  } bg-cover bg-center bg-no-repeat flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>

                  <h1 className="text-4xl text-white font-bold capitalize relative z-10 px-4 py-2 sm:text-5xl md:text-6xl shadow-lg">
                    {category}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
