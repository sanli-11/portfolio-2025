import navLinkType from "../types/navLinkType";

const cvLink: navLinkType = {
  icon: "fa-solid fa-file-arrow-down",
  id: 0,
  label: "Download CV",
  url: "https://drive.google.com/",
};

const socialLinks: navLinkType[] = [
  {
    id: 0,
    label: "BlueSky",
    url: "https://bsky.app/profile/sanli11.bsky.social",
    icon: "fa-brands fa-bluesky",
  },
  {
    id: 1,
    label: "Twitter",
    url: "https://twitter.com/@san_li11",
    icon: "fa-brands fa-twitter",
  },
  {
    id: 2,
    label: "GitHub",
    url: "https://github.com/sanli-11",
    icon: "fa-brands fa-github",
  },
];

export { cvLink, socialLinks };
