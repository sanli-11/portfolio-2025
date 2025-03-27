import logo from "../assets/images/logo.svg";
import { navLinks, linkToCV } from "../data/navLinks";
import type { linkType } from "../data/navLinks";
import CallToActionLink from "./CallToActionLink";
import Link from "./Link";

function Header() {
  return (
    <header className="shadow-2xs shadow-gray-300/30">
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
              <li key={link.id} className="text-center uppercase">
                <Link className="px-4 py-2" {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <CallToActionLink {...linkToCV} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
