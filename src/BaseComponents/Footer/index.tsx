import React from "react";
import {
  FooterStructure,
  FooterHeadLine,
  FooterHeadLineP,
  Logo,
  FooterLink,
  FooterLinkContainer
} from "./style";

const Footer: React.FC = () => (
  <FooterStructure>
    <FooterLinkContainer>
      <FooterLink>Sobre</FooterLink>
      <FooterLink>© Copyright 2022</FooterLink>
    </FooterLinkContainer>
    <FooterHeadLine>
      <FooterHeadLineP to="/">Seelly</FooterHeadLineP>
      <Logo />
    </FooterHeadLine>
  </FooterStructure>
);

export default Footer;
