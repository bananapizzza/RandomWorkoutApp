import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import selectedWorkout from './selectedWorkout'
import {reducer as formReducer} from 'redux-form';

//todoApp can be written as below
// export default function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }
console.log("reducers/actions_todo.js: combineReducers");
export default combineReducers({
    todos,
    visibilityFilter,
    selectedWorkout,
    form: formReducer
})
