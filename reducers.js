// All application state is stored as a single object
// For this todo app we wanna store 2 different things"
// currently selected visibility filter and the actual list of todos
// some data as well as some UI state stored in state tree

import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
    	case SET_VISIBILITY_FILTER:
			return action.filter
   		default:
			return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
    	case ADD_TODO:
    		return [
    			...state,
    			{
    				text: action.text,
    				completed: false
    			}
    		]
    	case TOGGLE_TODO:
    		// Reducer is a pure function that takes the previous state and an action and returns the next state
    		// of the form: (previousState, action) => newState

    		// It's important that a reducer stays pure, you should never:
    		// mutate args
    		// perform side effects like api calls and routing transitions
    		// call nonpure functions like Math.random()
    		// in a reducer
    		// should just calculate the next state and return it
    		return state.map((todo, index) => {
    			if (index === action.index) {
    				return Object.assign({}, todo, {
    					completed: !todo.completed
    				})
    			}
    			return todo
    		})
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp

	
