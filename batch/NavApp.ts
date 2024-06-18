const NAVIGATION_LINK: NavigationLink[] = [
  {
    name: "Accordion with nested Accordion",
    href: "/accordion/with-nested-accordion",
  },
  {
    name: "Accordion without nested Accordion",
    href: "/accordion/without-nested-accordion",
  },
  {
    name: "GitHub",
    href: "https://github.com/j-Cis/deno-fresh-error-notworking-nested-islands",
  },
  {
    name: "Fresh2 init (example)",
    href: "/fresh-2-init",
  }
];

interface NavigationLink {
  name: string;
  href: string;
}


export { NAVIGATION_LINK };
export type { NavigationLink };
