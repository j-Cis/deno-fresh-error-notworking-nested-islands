const NAVIGATION_LINK: NavigationLink[] = [
  {
    name: "Fresh2 init",
    href: "/",
  },
  {
    name: "Accordion without nested Accordion",
    href: "/accordion/without-nested-accordion",
  },
  {
    name: "Accordion with nested Accordion",
    href: "/accordion/with-nested-accordion",
  },
  {
    name: "GitHub",
    href: "https://github.com/j-Cis/deno-fresh-error-notworking-nested-islands",
  },
];

interface NavigationLink {
  name: string;
  href: string;
}


export { NAVIGATION_LINK };
export type { NavigationLink };
