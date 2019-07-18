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

//TODO: Find out how to send data to the backend server
export const fetchLoginResult = (username, password) => {
    return function (dispatch) {
        dispatch(requestLogin());
        return fetch("http://localhost:5000/").then(result => {
            if (result.status >= 400) {
                dispatch(loginFail(result.json()));
            }
            return result.json();
        }).then((json) =>
            dispatch(loginSuccess(json))
        );
    }
};

const submit = (values) => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

export default submit;