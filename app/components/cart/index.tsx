import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed w-full h-screen overflow-hidden z-20 top-0">
      <div className="bg-white p-5 h-screen absolute top-00 bottom-0 right-0 w-[600px] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-3 pb-3">
          <h2 className="font-bold text-md">Cart</h2>
          <button>Clear cart</button>
        </div>
        <div className="overflow-y-auto h-full py-10">
          <div className="flex items-center justify-between mb-5">
            <figure className="flex items-center">
              <img className="w-12 h-12 object-contain" />
              <div className="flex flex-col px-4">
                <figcaption className="text-sm"></figcaption>
                <figcaption className="text-gray-600 text-xs flex items-center"></figcaption>
              </div>
            </figure>
            <button className="text-red-600 text-sm hover:text-red-700">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button>View Cart</button>

          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}
