import Link from "next/link";
import ThemeSwtich from "./ThemeSwitch";

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
      <ThemeSwtich />
      <style jsx>{`
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
          }
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