import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-5 m-5 flex gap-5 text-2xl bg-black">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a href="/fetch">Fetch Data</a>
    </nav>
  );
};

export default Navbar;
