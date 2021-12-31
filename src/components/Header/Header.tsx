import React from "react";
import { THeader } from './Header.types';
import {HeaderContainer, Logo, GroupOfLinks, HeaderLink} from "./Header.styles";

const Header = ({ links }: THeader) => {
  return (
    <HeaderContainer>
      <Logo>Donuts</Logo>
      <GroupOfLinks>
        {
          links?.map(({ link, title }) => (
            <HeaderLink
              key={link}
              to={link}
            >
              {title}
            </HeaderLink>
          ))
        }
      </GroupOfLinks>

      <HeaderLink to={'/cart'}>Cart</HeaderLink>

    </HeaderContainer>
  )
};

export default Header;
