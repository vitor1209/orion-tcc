import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

import {
  AcoesAutenticacao,
  BotaoFecharMenu,
  BotaoMenuMobile,
  CabecalhoMenuMobile,
  LinkEntrar,
  ContainerNavegacao,
  ConteudoNavegacao,
  Logo,
  LinksMenuMobile,
  LinksNavegacao,
  MenuMobile,
} from "./Navbar.styles";

const links = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#pratique", label: "Pratique" },
  { href: "#proposito", label: "Propósito" },
  { href: "#dicionario", label: "Dicionário" },
];

export function MenuNavegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <ContainerNavegacao>
      <ConteudoNavegacao>
        <a href="#topo" aria-label="Voltar ao topo">
          <Logo src={logo} alt="Orion" />
        </a>

        <LinksNavegacao>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </LinksNavegacao>

        <AcoesAutenticacao>
          <LinkEntrar href="/login">
            Entrar
            <LogIn size={18} strokeWidth={1.8} />
          </LinkEntrar>
          <a href="#criar-conta">Criar conta</a>
        </AcoesAutenticacao>

        <BotaoMenuMobile
          type="button"
          onClick={() => setMenuAberto(true)}
          aria-label="Abrir menu de navegação"
        >
          <Menu size={26} strokeWidth={2} />
        </BotaoMenuMobile>
      </ConteudoNavegacao>

      <MenuMobile anchor="right" open={menuAberto} onClose={fecharMenu}>
        <CabecalhoMenuMobile>
          <Logo src={logo} alt="Orion" />
          <BotaoFecharMenu
            type="button"
            onClick={fecharMenu}
            aria-label="Fechar menu de navegação"
          >
            <X size={24} strokeWidth={2} />
          </BotaoFecharMenu>
        </CabecalhoMenuMobile>

        <LinksMenuMobile>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={fecharMenu}>
              {link.label}
            </a>
          ))}

          <LinkEntrar href="/login" onClick={fecharMenu}>
            Entrar
            <LogIn size={18} strokeWidth={1.8} />
          </LinkEntrar>
          <a href="#criar-conta" onClick={fecharMenu}>
            Criar conta
          </a>
        </LinksMenuMobile>
      </MenuMobile>
    </ContainerNavegacao>
  );
}
