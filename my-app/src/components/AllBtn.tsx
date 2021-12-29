import React from "react";
import {Link} from "react-router-dom";
import {THeader} from "../linksTo/links";
import {HeaderLink} from "../box/headerStyle";

export const  AllBtn = ({links}: THeader) => {
    return (
        <div>
            <HeaderLink to={links[1].link}> All </HeaderLink>
        </div>
    )
}