import { TCard } from '../components/Card/Card.types'
import { DonutList } from '../Mock/donutList'

export type donutListType = TCard[]

export type defaultStateType = {
    donutList: TCard[]
    cart: TCard[] | []
    totalSum: number
}
export const defaultState = {
    donutList: DonutList,
    cart: [],
    totalSum: 0,
}
