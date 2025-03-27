import type { linkType } from "../data/navLinks";

function Link({
  id,
  label,
  href,
  hasOverline = false,
  className,
}: linkType & { hasOverline?: boolean; className?: string }) {
  const overline =
    "before:absolute before:left-1/2 before:top-0 before:h-1 before:w-0 before:bg-red-500 before:transition-all before:content-[''] hover:before:left-0 hover:before:w-full";

  return (
    <a
      key={id}
      href={href}
      className={`relative block after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:content-[''] hover:after:left-0 hover:after:w-full ${hasOverline && overline} ${className}`}
    >
      {label}
    </a>
  );
}

export default Link;
