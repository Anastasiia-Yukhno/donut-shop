import {THeader} from "../../linksTo/links";
import {HeaderLink} from "./Header.styles";

export const  FavoritesBtn = ({links}: THeader) => {
    return (
        <div>
            <HeaderLink to={links[2].link}>Favorites</HeaderLink>
        </div>
    )
}
