import Link from "next/link";
import { NavMenuContainer } from "./NavMenu.styles";

const NavMenu = () => {
  return (
    <NavMenuContainer>
      <ul>
        <li>
          <Link href="/">CPUs</Link>
        </li>
        <li>
          <Link href="/">Graphics Cards</Link>
        </li>
        <li>
          <Link href="/">Power Supplies</Link>
        </li>
      </ul>
    </NavMenuContainer>
  );
};

export default NavMenu;
