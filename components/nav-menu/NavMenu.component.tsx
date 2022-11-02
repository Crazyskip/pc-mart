import Link from "next/link";
import { NavMenuContainer } from "./NavMenu.styles";

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <ul>
        <li>
          <Link href="/">
            <a>CPUs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Graphics Cards</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Power Supplies</a>
          </Link>
        </li>
      </ul>
    </NavMenuContainer>
  );
};

export default NavMenu;
