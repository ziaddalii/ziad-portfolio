import Link from "next/link";
import NavbarBackground from "./NavbarBackground";
import { NavigationLink } from "./NavigationLink";

const navLinks = [
  {
    id: 0,
    name: "works,",
    href: "#works",
  },
  {
    id: 1,
    name: "about,",
    href: "#about",
  },
  {
    id: 2,
    name: "contact,",
    href: "#contact",
  },
];
function Navbar() {
  return (
    <NavbarBackground>
      <nav className="relative z-10 flex justify-between text-secondary py-6 items-center border-b border-b-1 border-b-secondary border-b-solid">
        <ul className="flex gap-6 items-center">
          <li className="text-primary font-playfair">
            <Link href="/">Ziad Ali</Link>
          </li>
          <li className="uppercase sm:block hidden text-sm font-bold">Frontend developer</li>
        </ul>
        <ul className="flex gap-2 items-center">
          {navLinks.map((link) => (
            <NavigationLink link={link} key={link.id}/>
          ))}
        </ul>
      </nav>
    </NavbarBackground>
  );
}

export default Navbar;

