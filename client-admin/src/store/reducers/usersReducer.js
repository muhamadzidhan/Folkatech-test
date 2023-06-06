import { LOGIN_LOADING, REGISTER_LOADING, LOGGED_IN } from "../actions/actionType";

const initialState = {
    usersLoading: false,
    loggedIn: false,
    registerLoading: false,
};


export default function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGGED_IN:
            return {
                ...state,
                loggedIn: payload,
            };
        case LOGIN_LOADING:
            return {
                ...state,
                usersLoading: payload,
            };
        case REGISTER_LOADING:
            return {
                ...state,
                registerLoading: payload,
            };
        default:
            return state;
    }
}