"use client";
import { useContext } from "react";
import MyContext from "@/app/_context/my-context";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartProduct } from "@/app/types/category-sidebar";
export default function Cart() {
  const { cartProduct } = useContext(MyContext);

  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed w-full h-screen overflow-hidden z-20 top-0 left-0">
      <div className="bg-white p-5 h-screen absolute top-0 bottom-0 right-0 w-[600px] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-3 pb-3">
          <h2 className="font-bold text-md">Cart</h2>
          <button>Clear cart</button>
        </div>
        <div className="overflow-y-auto h-full py-10">
          {cartProduct.map((product: CartProduct, index: number) => (
            <div key={index} className="flex items-center justify-between mb-5">
              <figure className="flex items-center">
                <img className="w-12 h-12 object-contain" src={product.image} />
                <div className="flex flex-col px-4">
                  <figcaption className="text-sm">{product.title}</figcaption>
                  <figcaption className="text-gray-600 text-xs flex items-center">
                    {product.category}
                  </figcaption>
                </div>
              </figure>
              <button className="text-red-600 text-sm hover:text-red-700">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button>View Cart</button>
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}
