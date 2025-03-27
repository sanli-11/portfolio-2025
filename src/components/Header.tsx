import logo from "../assets/images/logo.svg";
import { navLinks, linkToCV } from "../data/navLinks";
import type { linkType } from "../data/navLinks";
import Link from "./Link";

function Header() {
  return (
    <header className="border-b border-b-green-300/40">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <a href="/" className="relative">
          <img
            className="font-display invert h-12 w-full object-cover transition-transform hover:scale-115"
            src={logo}
            alt="Homepage"
            width="172"
            height="99"
          />
        </a>
        <nav>
          <ul className="grid grid-cols-3 gap-x-20">
            {navLinks.map((link: linkType) => (
              <li key={link.id} className="uppercase text-center">
                <Link className="px-4 py-2" {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <Link className="px-4 py-3" hasOverline {...linkToCV} />
      </div>
    </header>
  );
}

export default Header;
