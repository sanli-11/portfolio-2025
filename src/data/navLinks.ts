interface linkType {
  id?: number;
  label: string;
  href: string;
}

const navLinks: linkType[] = [
  { id: 0, label: "Works", href: "#works" },
  { id: 1, label: "Skills", href: "#skills" },
  { id: 2, label: "Contact", href: "#contact" },
];

const linkToCV: linkType = { label: "Download CV", href: "https://drive.google.com/" }

export type { linkType };
export { navLinks, linkToCV };
