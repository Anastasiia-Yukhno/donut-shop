import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "../reducers";


//error
export const store = createStore(reducer, applyMiddleware(thunk))

