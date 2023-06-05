import { LOGIN_LOADING, BASE_URL } from "./actionType";

export const loginLoading = (payload) => ({
    type: LOGIN_LOADING,
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

            dispatch(loginLoading(false));
        } catch (err) {
            dispatch(loginLoading(false));
            throw JSON.parse(err);
        }
    };
}