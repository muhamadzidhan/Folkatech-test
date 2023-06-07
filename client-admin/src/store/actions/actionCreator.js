import {
    LOGIN_LOADING,
    BASE_URL,
    REGISTER_LOADING,
    PRODUCTS,
    PRODUCTS_LOADING,
    PRODUCT,
    PRODUCT_LOADING,
    LOGGED_IN

} from "./actionType";

export const loginLoading = (payload) => ({
    type: LOGIN_LOADING,
    payload,
});
export const registerLoading = (payload) => ({
    type: REGISTER_LOADING,
    payload,
});
export const fetchProductsSuccess = (payload) => ({
    type: PRODUCTS,
    payload,
});
export const productsLoading = (payload) => ({
    type: PRODUCTS_LOADING,
    payload,
});
export const fetchProductSuccess = (payload) => ({
    type: PRODUCT,
    payload,
});
export const productLoading = (payload) => ({
    type: PRODUCT_LOADING,
    payload,
});
export const isLoggedIn = (payload) => ({
    type: LOGGED_IN,
    payload,
});


export function login(payload) {
    return async (dispatch) => {
        try {
            dispatch(loginLoading(true));

            let res = await fetch(`${BASE_URL}/login`, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                throw await res.text();
            }

            let data = await res.json();
            // console.log(data, "///////////////");

            localStorage.access_token = data.access_token;
            localStorage.email = data.email;

            dispatch(isLoggedIn(true));
            dispatch(loginLoading(false));
        } catch (err) {
            dispatch(loginLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function postUser(payload) {
    return async (dispatch) => {
        try {
            dispatch(registerLoading(true));

            let res = await fetch(`${BASE_URL}/register`, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.access_token,
                },
            });

            if (!res.ok) {
                throw await res.text();
            }

            let { message } = await res.json();

            dispatch(registerLoading(false));
            return message;
        } catch (err) {
            dispatch(registerLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function fetchProducts() {
    return async (dispatch) => {
        try {
            dispatch(productsLoading(true));
            let res = await fetch(`${BASE_URL}/product`, {
                method: "get",
                headers: {
                    access_token: localStorage.access_token
                }
            });
            if (!res.ok) {
                throw await res.text();
            }
            let data = await res.json();

            dispatch(fetchProductsSuccess(data));
            dispatch(productsLoading(false));
        } catch (err) {
            dispatch(productsLoading(false));
            throw JSON.parse(err);
        }
    };
}

export function fetchProduct(id) {
    return async (dispatch) => {
        try {
            dispatch(productLoading(true));
            let res = await fetch(`${BASE_URL}/product/${id}`, {
                headers: {
                    access_token: localStorage.access_token
                }
            });
            if (!res.ok) {
                throw await res.text();
            }
            let data = await res.json();

            dispatch(fetchProductSuccess(data));
            dispatch(productLoading(false));
        } catch (err) {
            dispatch(productLoading(false));
            throw JSON.parse(err);
        }
    };
}