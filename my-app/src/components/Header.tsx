import React from "react";
import {Link} from "react-router-dom";
import {AllBtn} from "./AllBtn";
import {FavoritesBtn} from "./FavoritesBtn";
import {CartBtn} from "./CartBtn";
import {links} from "../linksTo/links";
import {HeaderContainer, Logo, GroupOfLinks} from "../box/headerStyle";

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Donuts</Logo>
            <GroupOfLinks>
                <AllBtn {...links}></AllBtn>
                <FavoritesBtn {...links}></FavoritesBtn>
            </GroupOfLinks>
            <CartBtn {...links}></CartBtn>

        </HeaderContainer>
    )
}

