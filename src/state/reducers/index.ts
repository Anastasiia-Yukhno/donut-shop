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

import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig:any = {
    key: 'root',
    storage
}

export const reducer = (state=defaultState, action:any) => {
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
            return {...state, donutList: action.value}

        case REMOVE_LIKE:
            return {...state, donutList: action.value}

        case ADD_TO_CART:
            return {...state, cart: action.value}

        case DECREASE_COUNT:
            return {...state, cart: action.value}

        case INCREASE_COUNT:
            return {...state, cart: action.value}

        case DELETE_GOOD:
            return {...state, cart: action.value}

        case SET_TOTAL_SUM:
            return {...state, totalSum: action.value}

        default:
            return state
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer