import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import selectedWorkout from './selectedWorkout';
import loginProcess from './loginProcess';
import signUpProcess from './signUpProcess';
import {reducer as formReducer} from 'redux-form';

//todoApp can be written as below
// export default function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }
export default combineReducers({
    todos,
    visibilityFilter,
    selectedWorkout,
    form: formReducer,
    loginProcess,
    signUpProcess
})
