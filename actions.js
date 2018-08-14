// Actions: Payloads of info that send data from the application to your store
// Only source of info for the store
// sent to the store using store.dispatch()
// Plain JS objects that must have a type property
// Types should typically be defined as string constants

// Action Types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Other constants
// List of different types of visibility filters

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Action creators (functions that create actions)
// Simply return an action
// To actually initate a dispatch of the action,
// pass the result to the dispatch() function
// bound action creators can be used to automatically dispatch so you can call them directly
// dispatch can be accessed directly from the store as store.dispatch()
// can also be accessed with a helper like react-redux's connect()
// bindActionCreators() can be used to automatically bind many action creators to a dispatch() function
// can be asynchronous

export function addTodo(text) {
    return { type: ADD_TODO, test }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

