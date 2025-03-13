import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 py-8">
      <a href="/">
        <img
          className="size-18 transition-transform hover:scale-105"
          src={logo}
          alt="SanLi Portfolio"
          width="138"
          height="99"
        />
      </a>
      <button
        className="rounded-full border border-stone-400 bg-white px-5 py-2 font-bold tracking-tight text-black shadow-xs transition-colors hover:border-black hover:bg-black hover:text-white"
        type="button"
      >
        Download CV
      </button>
    </header>
  );
}

export default Header;
