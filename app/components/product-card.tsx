interface CardProps {
  image: string;
  title: string;
  category: string;
  price: number;
}

export default function ProductCard({
  image,
  title,
  category,
  price,
}: CardProps) {
  return (
    <div className="shadow-custom-shadow p-4 rounded col-span-1 group hover:bg-gray-100">
      <div className="cursor-pointer flex flex-col items-center justify-between">
        <img
          className="w-[100px] h-[100px] object-contain"
          src={image}
          alt={title}
        />
        <h1 className="font-bold text-sm my-3">{title}</h1>
        <div className="flex items-center justify-between w-full">
          <span className="text-gray-400 text-sm">{category}</span>
          <span className="text-gray-400 text-sm">{price}</span>
        </div>
      </div>
    </div>
  );
}
