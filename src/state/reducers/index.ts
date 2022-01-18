import {
    GET_API,
    GET_DONUT_LIST,
    SHOW_MODAL,
    CLOSE_MODAL,
    SET_LIKE,
    REMOVE_LIKE,
    ADD_TO_CART,
    DECREASE_COUNT, INCREASE_COUNT, SET_TOTAL_SUM, DELETE_GOOD
} from "../actionTypes";
import {defaultState} from "../index";
import {TCard} from "../../components/Card/Card.types";

export const reducer = (state=defaultState, action:any) => {
    let index:number = 0
    let newState
    let currentCard: any = []
    let cart:[] | TCard[] = []
    switch (action.type) {
        case GET_API:
            return {...state, value: action.value};

        case GET_DONUT_LIST:
            return {...state, donutList: action.value};

        case SHOW_MODAL:
            return {...state, isModalShow: true, goodForModal: action.value}

        case CLOSE_MODAL:
            return {...state, isModalShow: action.value, goodForModal: {}}

        case SET_LIKE:
            index = state.donutList.findIndex((card) => card.id === action.value)
            state.donutList[index].isLiked = true
            newState = {...state}
            return {...newState}

        case REMOVE_LIKE:
            index = state.donutList.findIndex((card) => card.id === action.value)
            state.donutList[index].isLiked = false
            newState = {...state}
            return {...newState}

        case ADD_TO_CART:
            currentCard =  state.donutList.filter((card) => card.id === action.value) || {}
            index = state.cart.findIndex((a) => currentCard === a)
            cart = state.cart
            if(currentCard) {
                cart =  cart.concat(currentCard)
            }
            return {...state, cart}

        case DECREASE_COUNT:
            index  = state.cart.findIndex((card:TCard) => card.id === action.value)
            cart = [...state.cart]
            cart.splice(index, 1)
            newState = {...state, cart}
            return {...newState}

        case INCREASE_COUNT:
            let card:TCard | object  = state.cart.find((card:TCard) => card.id === action.value) || {}
            cart = state.cart
            if(Object.keys(card).length !== 0) {
                cart.push(card) //error
                //  Argument of type 'object' is not assignable to parameter of type 'TCard'.
                //  Type '{}' is missing the following properties from type 'TCard': title, image, price, onBuy, and 4 more
            }
            return {...state, cart}

        case DELETE_GOOD:
            cart = [...state.cart]
            while(cart.find((a) => a.id === action.value)) {
                index  = cart.findIndex((card) => card.id === action.value)
                cart.splice(index, 1)
            }
            return {...state, cart}

        case SET_TOTAL_SUM:
            return {...state, totalSum: action.value}

        default:
            return state
    }
}