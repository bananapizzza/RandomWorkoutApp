import fetch from "cross-fetch";

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const requestLogin = () => ({
    type: REQUEST_LOGIN
});

export const loginSuccess = (userInfo) => ({
    type: LOGIN_SUCCESS,
    username: userInfo
});

export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    loginError: error
});

export const loginInfoSubmit = (values, dispatch) => {
    dispatch(requestLogin());
    let isLoginFail = false;
    fetch("http://localhost:5000/check_login_info", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    }).then(result => {
        if (result.status >= 400) {
            isLoginFail = true;
        }
        return result.json();
    }).then((json) => {
            if(isLoginFail){
                dispatch(loginFail(json));
            } else {
                dispatch(loginSuccess(values.username));
            }
        }
    );
};

export default loginInfoSubmit;