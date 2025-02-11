"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "../cart";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();
  const [isToggleCart, setIsToggleCart] = useState<boolean>(false);

  return (
    <nav className="flex items-center gap-3 p-5 border-b border-slate-300 shadow-sm sticky top-0 z-10 bg-slate-50">
      <li
        className={`${
          pathname === "/" ? "text-green-500" : "text-gray-500"
        } list-none`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`${
          pathname === "/shop" ? "text-green-500" : "text-gray-500"
        } list-none`}
      >
        <Link href="/shop">Shop</Link>
      </li>
      <button
        className="ml-auto flex items-center gap-3"
        onClick={() => setIsToggleCart(!isToggleCart)}
      >
        Cart bag
        <FontAwesomeIcon icon={faBagShopping} />
      </button>
      {isToggleCart && <Cart />}
    </nav>
  );
}
