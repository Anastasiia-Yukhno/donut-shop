import {
    GET_API,
    SHOW_MODAL,
    CLOSE_MODAL,
    SET_LIKE,
    ADD_TO_CART,
    GET_DONUT_LIST,
    REMOVE_LIKE,
    INCREASE_COUNT, DECREASE_COUNT, SET_TOTAL_SUM, DELETE_GOOD
} from "../actionTypes";
import {TCard} from "../../components/Card/Card.types";

//thunk request
export const addApiResult = (data:any) => ({type: GET_API, value: data})
export const getAPIRequest = () => {
    return (dispatch:any) => {
        fetch(`${process.env.REACT_APP_API_URL}/weather?q=Pesochin&appid=f6c56099f6f579964efe2d6dd54694d7`).then(function (response) {
            return response.json()
        }).then( function (data) { console.log(data); dispatch(addApiResult(data)) })
    }
}
//get list of donuts
export const getDonutList = (donutList:TCard[]) => ({type: GET_DONUT_LIST, value: donutList})

//modal folder
export const showModal = (good: Object) => ({type: SHOW_MODAL, value: good})
export const closeModal = {type: CLOSE_MODAL, value: false}

//like
export const setLike = (id:number) => ({type: SET_LIKE, value: id})
export const removeLike = (id:number) => ({type: REMOVE_LIKE, value: id})

//cart
export const addGoodToCart = (goodId:number) => ({type: ADD_TO_CART, value: goodId})
export const setIncreaseCount = (id:number) => ({type: INCREASE_COUNT, value: id})
export const setDecreaseCount = (id:number) => ({type: DECREASE_COUNT, value: id})
export const setTotalSum = (sum:number) => ({type: SET_TOTAL_SUM, value: sum})
export const deleteGood = (id:number) => ({type: DELETE_GOOD, value: id})