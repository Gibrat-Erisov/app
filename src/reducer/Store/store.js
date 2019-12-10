import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import auth from "./auth-store";

let reducers = combineReducers({ auth });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
