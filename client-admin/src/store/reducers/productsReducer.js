import {
    PRODUCTS,
    PRODUCTS_LOADING,
    PRODUCT,
    PRODUCT_LOADING
} from "../actions/actionType";

const initialState = {
    products: [],
    productsLoading: false,
    product: {},
    productLoading: false
};


export default function productsReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        case PRODUCTS_LOADING:
            return {
                ...state,
                productsLoading: payload,
            };
        case PRODUCT:
            return {
                ...state,
                product: payload,
            };
        case PRODUCT_LOADING:
            return {
                ...state,
                productLoading: payload,
            };
        default:
            return state;
    }
}