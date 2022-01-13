import {GET_API} from "../actionTypes";

export const addApiResult = (data:any) => ({type: GET_API, value: data})
export const getAPIRequest = () => {
    return (dispatch:any) => {
        fetch(`${process.env.REACT_APP_API_URL}/weather?q=Pesochin&appid=f6c56099f6f579964efe2d6dd54694d7`).then(function (response) {
            return response.json()
        }).then( function (data) { console.log(data); dispatch(addApiResult(data)) })
    }
}
