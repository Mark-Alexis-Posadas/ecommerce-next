import { v4 as uuidv4 } from "uuid";
import React from "react";

export default function CategorySidebar({ categories }) {
  return (
    <aside className="p-0 md:px-5 mb-5 md:mb-0">
      <ul className="flex md:flex-col md:gap-0 items-center md:items-start gap-4">
        {/* {categoryName ? (
          ""
        ) : (
          <li
            key="all"
            className={`${
              active === -1 ? "text-green-600" : "text-gray-600"
            } my-2 cursor-pointer`}
            onClick={() => handleFilterCategory("All", -1)}
          >
            All
          </li>
        )} */}

        {categories.map((category, index) => (
          <li
            key={uuidv4()}
            className="my-2 cursor-pointer"
            // onClick={() => handleFilterCategory(category, index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
