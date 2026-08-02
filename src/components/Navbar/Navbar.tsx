import { LogIn } from "lucide-react";
import logo from "../../assets/images/logo.png";

import {
  AuthActions,
  LoginLink,
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
          <a href="#dicionario">Dicionário</a>
        </NavLinks>

        <AuthActions>
          <LoginLink href="#entrar">
            Entrar
            <LogIn size={18} strokeWidth={1.8} />
          </LoginLink>
          <a href="#criar-conta">Criar conta</a>
        </AuthActions>
      </NavbarContent>
    </NavbarContainer>
  );
}
