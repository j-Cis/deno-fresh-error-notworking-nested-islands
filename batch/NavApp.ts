const NAVIGATION_LINK: NavigationLink[] = [
  {
    name: "fresh init blank app - example",
    href: "/",
  },
  {
    name: "Pobierz",
    href: "/wydanie",
  },
  {
    name: "Skanoteka (oficjalna)",
    href: "https://skanoteka.genealodzy.pl/",
  },
  {
    name: "Skanoteka",
    href: "/skanoteka",
  },
];

interface NavigationLink {
  name: string;
  href: string;
}


export { NAVIGATION_LINK };
export type { NavigationLink };
