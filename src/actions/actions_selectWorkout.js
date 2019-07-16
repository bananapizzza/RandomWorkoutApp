import fetch from 'cross-fetch';

export const CLICK_RANDOM_BUTTON = 'CLICK_RANDOM_BUTTON';
export const REQUEST_WORKOUT = 'REQUEST_WORKOUT';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';

export const clickRandomButton = () => ({
    type: CLICK_RANDOM_BUTTON
});

export const requestWorkout = () => ({
    type: REQUEST_WORKOUT
});

export const receiveWorkout = (json) => ({
    type: RECEIVE_WORKOUT,
    workoutname: json
});

export const fetchWorkout = () => {
    return function (dispatch) {
        dispatch(requestWorkout());
        return fetch("http://localhost:5000/").then(result => {
            if (result.status >= 400) {
                throw new Error("Bad response from server");
            }
            return result.json();
        }).then((json) =>
            dispatch(receiveWorkout(json))
        );
    }
};