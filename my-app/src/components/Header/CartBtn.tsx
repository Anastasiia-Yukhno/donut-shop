import {THeader} from "../../linksTo/links";
import {HeaderLink} from "./Header.styles";

export const  CartBtn = ({links}: THeader) =>
    <div>
        <HeaderLink to={links[3].link}> Cart </HeaderLink>
    </div>
