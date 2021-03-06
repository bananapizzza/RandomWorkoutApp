import {REQUEST_LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from "../actions/actions_login";

const loginProcess = (state = {
    isLoginProcessing: false,
    isLoggedIn: false,
    username: "",
    loginError: ""
}, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, isLoginProcessing: true};
        case LOGIN_FAIL:
            return {...state, isLoginProcessing: false, isLoggedIn: false, loginError: action.loginError};
        case LOGIN_SUCCESS:
            return {...state, isLoginProcessing: false, isLoggedIn: true, username: action.username};
        default:
            return state;
    }
};

export default loginProcess;