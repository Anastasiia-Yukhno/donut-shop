export type TCard = {
    title: string
    image: string
    price: number
    onBuy: (title: string, image: string, price: number, id: number) => void
    onLike: (id: number, isLiked: boolean) => void
    addToCart: (id: number) => void
    isLiked: boolean
    id: number
    index: number
}

export type cardActionType = {
    image: string
    price: number
    isLiked: boolean
    id: number
    title: string
}
