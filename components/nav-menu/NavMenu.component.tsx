import Link from "next/link";
import { NavMenuContainer } from "./NavMenu.styles";

const categories = [
  { name: "Cases", slug: "cases" },
  { name: "Cooling", slug: "cooling" },
  { name: "CPUs", slug: "cpus" },
  { name: "Graphics Cards", slug: "graphics-cards" },
  { name: "Hard Drives & SSDs", slug: "hard-drives-and-ssds" },
  { name: "Keyboards", slug: "keyboards" },
  { name: "Memory", slug: "memory" },
  { name: "Mice", slug: "mice" },
  { name: "Monitors", slug: "monitors" },
  { name: "Motherboards", slug: "motherboards" },
  { name: "Power Supplies", slug: "power-supplies" },
  { name: "Speakers", slug: "speakers" },
];

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/category/${category.slug}`} replace>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavMenuContainer>
  );
};

export default NavMenu;
