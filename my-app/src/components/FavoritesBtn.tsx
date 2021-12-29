import React from 'react';
import {Link} from "react-router-dom";
import {THeader} from "../linksTo/links";
import {HeaderLink} from "../box/headerStyle";

export const  FavoritesBtn = ({links}: THeader) => {
    return (
        <div>
            <HeaderLink to={links[2].link}>Favorites</HeaderLink>
        </div>
    )
}



//
//
// export default {
//     /* 👇 The title prop is optional.
//     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//     * to learn how to generate automatic titles
//     */
//     title: 'Button',
//     component: Button,
// } as ComponentMeta<typeof Button>;
//
// export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;