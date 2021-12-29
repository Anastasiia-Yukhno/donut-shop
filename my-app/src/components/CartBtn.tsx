import {Link} from "react-router-dom";
import React from "react";
import {THeader} from "../linksTo/links";
import {HeaderLink} from "../box/headerStyle";

interface Cart {
    classname:string,
    role:string,
    to:string
}

export const  CartBtn = ({links}: THeader) => {
    return (
        <div>
            <HeaderLink to={links[3].link}> Cart </HeaderLink>
        </div>
    )
}