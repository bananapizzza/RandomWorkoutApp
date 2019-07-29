import {REQUEST_SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS} from "../actions/actions_signUp";

const signUpProcess = (state = {
    isSignUpProcessing: false,
    isSignedUp: false,
    username: "",
    signUpError: ""
}, action) => {
    switch (action.type) {
        case REQUEST_SIGN_UP:
            return {...state, isSignUpProcessing: true};
        case SIGN_UP_FAIL:
            return {...state, isSignUpProcessing: false, isSignedUp: false, signUpError: action.signUpError};
        case SIGN_UP_SUCCESS:
            return {...state, isSignUpProcessing: false, isSignedUp: true, username: action.username};
        default:
            return state;
    }
};

export default signUpProcess;