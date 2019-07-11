import {CLICK_RANDOM_BUTTON} from "../actions/actions_selectWorkout";

const workoutArray = [
    "Squat",
    "Lunge",
    "Push up",
    "Burpee"
];

const getWorkout = () => (
    workoutArray[Math.floor(Math.random() * workoutArray.length)]
);

const selectedWorkout = (state = "", action) => {
    switch(action.type){
        case CLICK_RANDOM_BUTTON:
            console.log("click random button");
            return getWorkout();
        default:
            return state;
    }
};

export default selectedWorkout;