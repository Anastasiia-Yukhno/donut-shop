export type TCard = {
    title: string;
    image: string;
    price: number;
    onBuy?: (date:void) => void;
    onLike?: (date:void) => void;
}

