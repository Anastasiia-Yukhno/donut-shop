export type GoodItemTypes = {
    title: string
    image: string
    price: number
    id: number
    increaseCount: (id: number) => void
    decreaseCount: (id: number) => void
    deleteGoodFromCart: (id: number) => void
    goodsCount: number
}
