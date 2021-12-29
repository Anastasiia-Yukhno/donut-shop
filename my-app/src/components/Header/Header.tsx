import {AllBtn} from "./AllBtn";
import {FavoritesBtn} from "./FavoritesBtn";
import {CartBtn} from "./CartBtn";
import {links} from "../../linksTo/links";
import {HeaderContainer, Logo, GroupOfLinks} from "./Header.styles";

export const HeaderPart = () => {
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

