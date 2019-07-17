import {REQUEST_LOGIN, RECEIVE_LOGIN_RESULT} from "../actions/actions_login";

const loginInfo = (state = {
    isLoginProcessing: false,
    isLoggedIn: false,
    username: ""
}, action) => {
    switch(action.type){
        case REQUEST_LOGIN:
            return {...state, isLoginProcessing: true};
        case RECEIVE_LOGIN_RESULT:
            return {...state, isLoginProcessing: false, isLoggedIn: true, username: action.username};
        default:
            return state;
    }
};

export default loginInfo;