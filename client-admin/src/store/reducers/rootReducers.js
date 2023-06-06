import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";


export default combineReducers({
    usersReducer,
    products: productsReducer,
})