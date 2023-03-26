import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
          }
        `}</style>
    </nav>
  );
}

export default Navbar;