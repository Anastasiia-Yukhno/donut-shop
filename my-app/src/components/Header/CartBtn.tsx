import {THeader} from "../../linksTo/links";
import {HeaderLink} from "./Header.styles";

export const  CartBtn = ({links}: THeader) => {
    return (
        <div>
            <HeaderLink to={links[3].link}> Cart </HeaderLink>
        </div>
    )
}