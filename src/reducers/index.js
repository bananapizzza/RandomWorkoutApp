import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//todoApp can be written as below
// export default function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }
console.log("reducers/index.js: combineReducers");
export default combineReducers({
    todos,
    visibilityFilter
})
