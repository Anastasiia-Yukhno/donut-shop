export type TCard = {
    title: string;
    image: string;
    price: number;
    onBuy: (title: string, image:string, price:number, id:number) => void;
    onLike: (id:number, isLiked:boolean) => void;
    isLiked: boolean;
    id: number;
    index: number,
}

