import {THeader} from "../../linksTo/links";
import {HeaderLink} from "./Header.styles";

export const  AllBtn = ({links}: THeader) =>
    <div>
        <HeaderLink to={links[1].link}> All </HeaderLink>
    </div>
