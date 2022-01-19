import { TCard } from "../components/Card/Card.types";
import {DonutList} from "../Mock/donutList";

export type goodForModalType = {
    title: string,
    price: number,
    image: string,
    id: number
}

export type donutListType = TCard[]

export type defaultStateType = {
    donutList: TCard[],
    isModalShow: boolean,
    goodForModal: goodForModalType,
    cart: TCard[] | [],
    totalSum: number
}

export const defaultState = {
    donutList: DonutList,
    isModalShow: false,
    goodForModal: {},
    cart: [],
    totalSum: 0
}
