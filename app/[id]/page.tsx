export default async function FeaturedDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const singleProduct = await data.json();
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-sm"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            {singleProduct.title}
          </h1>
          <p className="text-lg text-gray-600">{singleProduct.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-blue-600">{`$${singleProduct.price}`}</span>
            <span className="text-sm text-gray-500">
              {singleProduct.category}
            </span>
          </div>

          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition-colors duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
