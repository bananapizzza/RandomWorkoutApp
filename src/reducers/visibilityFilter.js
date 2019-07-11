import {SET_VISIBILITY_FILTER} from "../actions";
import {VisibilityFilters} from "../actions";


const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    console.log("reducers/visibilityFilter.js: visibilityFilter");

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter