import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>Brand</h2>

      <ul>
        <Link href="/">Home</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/news">News</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
