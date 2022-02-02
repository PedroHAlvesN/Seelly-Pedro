import React from "react";
import { useLocation } from "react-router-dom";
import {
  Logo,
  HeadLine,
  HeadLineP,
  NavbarStructure,
  InteriorNavbar,
  ItemNavbar
} from "./style";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <NavbarStructure>
      <HeadLine>
        <Logo alt="Logo" src="./logo-2.png"></Logo>
        <HeadLineP to="/">Seelly</HeadLineP>
      </HeadLine>
      <ItemNavbar>
        <InteriorNavbar to="/genshin">Genshin Impact</InteriorNavbar>
        <InteriorNavbar to="/stardew-valley">Stardew Valley</InteriorNavbar>
      </ItemNavbar>
    </NavbarStructure>
  );
};

export default Navbar;
