export type TCardFolder = {
    title: string;
    image: string;
    price: number;
    id: number,
    addToCart: (id:number) => void,
    addToCartAndBuy: (id:number) => void,
    closeModalFolder: () => void
}
