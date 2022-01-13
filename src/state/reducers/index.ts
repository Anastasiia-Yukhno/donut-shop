import {GET_API, GET_DONUT_LIST} from "../actionTypes";
import {defaultState} from "../index";

export const reducer = (state=defaultState, action:any) => {
    switch (action.type) {
        case GET_API:
            return {...state, value: action.value};
        case GET_DONUT_LIST:
            return {...state, donutList: action.value};
        default:
            return state
    }
}