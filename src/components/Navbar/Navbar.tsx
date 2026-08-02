import { LogIn } from "lucide-react";
import logo from "../../assets/images/logo.png";

import {
  AcoesAutenticacao,
  LinkEntrar,
  ContainerNavegacao,
  ConteudoNavegacao,
  Logo,
  LinksNavegacao,
} from "./Navbar.styles";

export function MenuNavegacao() {
  return (
    <ContainerNavegacao>
      <ConteudoNavegacao>
        <a href="#topo" aria-label="Voltar ao topo">
          <Logo src={logo} alt="Orion" />
        </a>

        <LinksNavegacao>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#pratique">Pratique</a>
          <a href="#proposito">Propósito</a>
          <a href="#dicionario">Dicionário</a>
        </LinksNavegacao>

        <AcoesAutenticacao>
          <LinkEntrar href="#entrar">
            Entrar
            <LogIn size={18} strokeWidth={1.8} />
          </LinkEntrar>
          <a href="#criar-conta">Criar conta</a>
        </AcoesAutenticacao>
      </ConteudoNavegacao>
    </ContainerNavegacao>
  );
}
