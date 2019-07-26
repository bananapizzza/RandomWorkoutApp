import fetch from "cross-fetch";

//Action list
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

//Action for requesting sign up
export const requestSignUp = () => ({
    type: REQUEST_SIGNUP
});

//Action for sign up success
export const signUpSuccess = (userInfo) => ({
    type: SIGNUP_SUCCESS,
    username: userInfo
});

//Action for sign up fail
export const signUpFail = (error) => ({
    type: SIGNUP_FAIL,
    loginError: error
});

//Action for clicking Submit button
export const signUpInfoSubmit = async (values, dispatch) => {
    console.log(values);
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