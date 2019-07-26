import {REQUEST_SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS} from "../actions/actions_signUp";

const signUpProcess = (state = {
    isSignUpProcessing: false,
    isSignedUp: false,
    username: "",
    signUpError: ""
}, action) => {
    switch (action.type) {
        case REQUEST_SIGNUP:
            return {...state, isSignUpProcessing: true};
        case SIGNUP_FAIL:
            return {...state, isSignUpProcessing: false, isSignedUp: false, signUpError: action.signUpError};
        case SIGNUP_SUCCESS:
            return {...state, isSignUpProcessing: false, isSignedUp: true, username: action.username};
        default:
            return state;
    }
};

export default signUpProcess;