
export type TLinkItem = {
    title: string;
    link: string;
}

export type THeader = {
    links: Array<TLinkItem>
}

export const links = {
    links:[
        {
            title: "home",
            link: "/"
        },
        {
            title: "all",
            link: "/all"
        },
        {
            title: "favorites",
            link: "/favorites"
        },
        {
            title: "cart",
            link: "/cart"
        },
    ]}
