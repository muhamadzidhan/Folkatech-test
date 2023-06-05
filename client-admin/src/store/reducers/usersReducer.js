import { LOGIN_LOADING } from "../actions/actionType";

const initialState = {
    usersLoading: false,
};


export default function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                usersLoading: payload,
            };
        default:
            return state;
    }
}