"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 p-5">
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
      <button className="ml-auto">Cart bag</button>
    </nav>
  );
}
