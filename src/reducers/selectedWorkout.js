import {REQUEST_WORKOUT, RECEIVE_WORKOUT} from "../actions/actions_selectWorkout";

const selectedWorkout = (state = {
    isFetching: false,
    name: ""
}, action) => {
    switch (action.type) {
        case REQUEST_WORKOUT:
            return {...state, isFetching: true};
        case RECEIVE_WORKOUT:
            return {...state, isFetching: false, name: action.workoutname};
        default:
            return state;
    }
};

export default selectedWorkout;