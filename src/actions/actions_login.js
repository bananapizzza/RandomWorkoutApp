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
export const loginInfoSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    console.log(username + password);

    return fetch("http://localhost:5000/check_login_info", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    }).then(result => {
        console.log("result" + result);
        if (result.status >= 400) {
            //dispatch(loginFail(result.json()));
        }
        return result.json();
    }).then((json) =>
        window.alert(`You submitted:\n\n${JSON.stringify(json, null, 2)}`)
    );
    // return function (dispatch) {
    //     console.log("requestLogin");
    //     dispatch(requestLogin());
    //     return fetch("http://localhost:5000/check_login_info", {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     }).then(result => {
    //         console.log("getresult?");
    //
    //         if (result.status >= 400) {
    //             dispatch(loginFail(result.json()));
    //         }
    //         return result.json();
    //     }).then((json) =>
    //         window.alert(`You submitted:\n\n${JSON.stringify(json, null, 2)}`)
    //         //dispatch(loginSuccess(json))
    //     );
    // }
};

export default loginInfoSubmit;