import fetch from "cross-fetch";

//Action list
export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

//Action for requesting sign up
export const requestSignUp = () => ({
    type: REQUEST_SIGN_UP
});

//Action for sign up success
export const signUpSuccess = (userInfo) => ({
    type: SIGN_UP_SUCCESS,
    username: userInfo
});

//Action for sign up fail
export const signUpFail = (error) => ({
    type: SIGN_UP_FAIL,
    signUpError: error
});

//Action for clicking Submit button
export const signUpInfoSubmit = async (values, dispatch) => {
    dispatch(requestSignUp());

    const response = await fetch("http://localhost:5000/sign_up", {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    });

    const result = await response.json();
    if(response.status >= 400) {
        dispatch(signUpFail(result));
    } else {
        dispatch(signUpSuccess(values.username));
    }
};

export default signUpInfoSubmit;