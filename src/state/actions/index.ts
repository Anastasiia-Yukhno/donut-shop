import {
    GET_API,
    SET_LIKE,
    ADD_TO_CART,
    GET_DONUT_LIST,
    REMOVE_LIKE,
    INCREASE_COUNT,
    DECREASE_COUNT,
    SET_TOTAL_SUM,
    DELETE_GOOD,
} from '../actionTypes'
import { TCard } from '../../components/Card/Card.types'
import { store } from '../store'
import { cardActionType } from '../../components/Card/Card.types'

//thunk request
export const addApiResult = (data: any) => ({ type: GET_API, value: data })
export const getAPIRequest = () => {
    return (dispatch: any) => {
        fetch(
            `${process.env.REACT_APP_API_URL}/weather?q=Pesochin&appid=f6c56099f6f579964efe2d6dd54694d7`
        )
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                dispatch(addApiResult(data))
            })
    }
}
//get list of donuts
export const getDonutList = (donutList: TCard[]) => ({
    type: GET_DONUT_LIST,
    value: donutList,
})

//like
export const setLike = (id: number) => {
    let donutList: cardActionType[] = [...store.getState().donutList]
    donutList.map((card: cardActionType) => {
        if (card.id === id) {
            card.isLiked = true
        }
        return donutList
    })
    return { type: SET_LIKE, value: donutList }
}
export const removeLike = (id: number) => {
    let donutList: cardActionType[] = [...store.getState().donutList]
    donutList.map((card: cardActionType) => {
        if (card.id === id) {
            card.isLiked = false
        }
        return donutList
    })
    return { type: REMOVE_LIKE, value: donutList }
}

//cart
export const addGoodToCart = (id: number) => {
    let card: cardActionType | undefined = store
        .getState()
        .donutList.find((good) => good.id === id)
    let cart: cardActionType[] = [...store.getState().cart]
    if (card) {
        cart = cart.concat(card)
    }
    return { type: ADD_TO_CART, value: cart }
}
export const setDecreaseCount = (id: number) => {
    let cart: cardActionType[] = [...store.getState().cart]
    let index: number = store
        .getState()
        .cart.findIndex((good: TCard) => good.id === id)
    cart.splice(index, 1)
    return { type: DECREASE_COUNT, value: cart }
}
export const setIncreaseCount = (id: number) => {
    let cart: cardActionType[] = [...store.getState().cart]
    let card: cardActionType | undefined = store
        .getState()
        .donutList.find((good) => good.id === id)
    if (card) {
        cart = cart.concat(card)
    }
    return { type: INCREASE_COUNT, value: cart }
}
export const deleteGood = (id: number) => {
    let cart: TCard[] = [...store.getState().cart]
    while (cart.find((card) => card.id === id)) {
        cart.splice(
            cart.findIndex((card) => card.id === id),
            1
        )
    }
    return { type: DELETE_GOOD, value: cart }
}
export const setTotalSum = (sum: number) => ({
    type: SET_TOTAL_SUM,
    value: sum,
})
