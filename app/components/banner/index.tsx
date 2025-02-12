"use client";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface BannerType {
  name: string;
  image: string;
}
interface T {
  bannerData: BannerType[];
}
export const BannerCarousel: FC<T> = ({ bannerData }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() =>
          setActive((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1))
        }
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>

      <div className="flex flex-col items-center w-full">
        {bannerData.map((item: BannerType, index: number) => (
          <div
            className="relative flex items-center justify-center w-full"
            key={uuidv4()}
          >
            <img
              src={item.image}
              className={`${
                index === active % bannerData.length ? "block" : "hidden"
              } w-full h-[400px] object-cover rounded px-10`}
            />
            <h1
              className={`${
                index === active % bannerData.length ? "block" : "hidden"
              } text-4xl text-white font-bold absolute`}
            >
              {item.name}
            </h1>
          </div>
        ))}

        <ul className="flex items-center gap-4 mt-4">
          {bannerData.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                index === active % bannerData.length
                  ? "bg-green-600"
                  : "bg-slate-300"
              }`}
              key={uuidv4()}
            ></li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setActive((prev) => prev + (1 % bannerData.length))}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};
