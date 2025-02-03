import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-3">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <button>Cart bag</button>
    </nav>
  );
}
