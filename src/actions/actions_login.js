import fetch from "cross-fetch";

//Action list
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

//Action for requesting login
export const requestLogin = () => ({
    type: REQUEST_LOGIN
});

//Action for login success
export const loginSuccess = (userInfo) => ({
    type: LOGIN_SUCCESS,
    username: userInfo
});

//Action for login fail
export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    loginError: error
});

//Action for clicking Log in button
export const loginInfoSubmit = async (values, dispatch) => {
    dispatch(requestLogin());

    const response = await fetch("http://localhost:5000/check_login_info", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    });

    const result = await response.json();
    if(response.status >= 400) {
        dispatch(loginFail(result));
    } else {
        dispatch(loginSuccess(values.username));
    }
};

export default loginInfoSubmit;