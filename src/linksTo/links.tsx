
export type TLinkItem = {
    title: string;
    link: string;
}

export type THeader = {
    links: Array<TLinkItem>
}

// Header /
// Header.styles.tsx
// Header.tsx
// Header.types.ts
// index.ts
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
