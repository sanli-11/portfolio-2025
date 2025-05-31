import Logo from "../assets/images/logo-without-bg.svg";
import { cvLink, socialLinks } from "../data/navLinks";
import navLinkType from "../types/navLinkType";

function Header() {
  return (
    <header className="flex items-end justify-between px-16 pt-10 text-white">
      <a href="/">
        <img
          className="inline-block"
          src={Logo}
          alt="SanLi Portfolio"
          width="85"
          height="85"
        />
      </a>
      <a
        href={cvLink.url}
        className="group min-h-10 -skew-x-25 rounded-sm bg-white px-4 py-2 transition-transform hover:skew-x-0"
      >
        <div className="skew-x-25 transition-transform group-hover:skew-x-0">
          <span className="text-lg font-bold text-stone-800">
            {cvLink.label}
          </span>
        </div>
      </a>
      <nav className="absolute right-12 bottom-10">
        <ul className="flex flex-col items-end justify-end gap-y-8 text-lg">
          {socialLinks.map((link: navLinkType) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="group flex items-center justify-end gap-x-4 rounded-full p-2 transition-colors hover:bg-white"
              >
                <span className="ml-2 hidden font-bold text-stone-800 transition-all group-hover:inline-block">
                  {link.label}
                </span>
                {link.icon && (
                  <i
                    className={`${link.icon} text-3xl text-stone-300 transition-colors group-hover:text-stone-800`}
                  ></i>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
