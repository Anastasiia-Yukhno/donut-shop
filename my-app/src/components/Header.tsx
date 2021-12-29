import React from "react";
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
                <AllBtn {...links}/>
                <FavoritesBtn {...links}/>
            </GroupOfLinks>
            <CartBtn {...links}/>

        </HeaderContainer>
    )
}

