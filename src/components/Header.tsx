import logo from "../assets/images/logo.svg";

interface linkType {
  id: number;
  label: string;
  href: string;
}

function Header() {
  const links: linkType[] = [
    { id: 0, label: "Works", href: "#works" },
    { id: 1, label: "Skills", href: "#skills" },
    { id: 2, label: "Contact", href: "#contact" },
  ];
  return (
    <header className="container mx-auto flex items-center justify-between px-8 py-4">
      <a href="/" className="relative">
        <img
          className="font-display h-12 w-full object-cover transition-transform hover:scale-115"
          src={logo}
          alt="Homepage"
          width="172"
          height="99"
        />
      </a>
      <nav>
        <ul className="grid grid-cols-3 gap-x-20">
          {links.map((link: linkType) => (
            <li key={link.id} className="text-center uppercase">
              <a
                href={link.href}
                className="relative block px-4 py-2 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:content-[''] hover:after:left-0 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="https://drive.google.com"
        className="relative block px-4 py-4 before:absolute before:right-1/2 before:bottom-0 before:h-1 before:w-0 before:bg-red-500 before:transition-all before:content-[''] after:absolute after:top-0 after:left-1/2 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:content-[''] hover:before:right-0 hover:before:w-full hover:after:left-0 hover:after:w-full"
      >
        Download CV
      </a>
    </header>
  );
}

export default Header;
