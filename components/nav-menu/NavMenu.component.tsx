import Link from "next/link";
import { NavMenuContainer } from "./NavMenu.styles";

const categories = [
  { name: "Cases", slug: "cases" },
  { name: "Cooling", slug: "cooling" },
  { name: "CPUs", slug: "cpus" },
  { name: "Graphics Cards", slug: "graphics-cards" },
  { name: "Hard Drives & SSDs", slug: "hard-drives-and-ssds" },
  { name: "Memory", slug: "memory" },
  { name: "Monitors", slug: "monitors" },
  { name: "Motherboards", slug: "motherboards" },
  { name: "Power Supplies", slug: "power-supplies" },
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
