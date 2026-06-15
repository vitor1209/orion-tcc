import logo from "../../assets/logo.png";

import {
  NavbarContainer,
  NavbarContent,
  Logo,
  NavLinks,
} from "./Navbar.styles";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <a href="#topo" aria-label="Voltar ao topo">
          <Logo src={logo} alt="Orion" />
        </a>

        <NavLinks>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#pratique">Pratique</a>
          <a href="#proposito">Propósito</a>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
}