import type { linkType } from "../data/navLinks";

function CallToActionLink({ label, href }: linkType) {
  return (
    <a
      href={href}
      className="rounded-md border-2 border-gray-400 px-5 py-3 font-medium transition-colors hover:border-red-500 hover:bg-red-500"
    >
      {label}
    </a>
  );
}

export default CallToActionLink;
