# Actions

## Actions

**Actions** are paylods of information that send data from your application to your store.

The **only** source of information for the store.

`store.dispatch`

## Action Creators

Functions that create actions.

Like this:

    function addTodo(text) {
      return { type: ADD_TODO, index }
    }


# Reducers

Reducers consume actions and update state

    (previousState, action) => newState

Try to keep user data and UI data separate

Never do these inside a reducer:
- mutate reducer arguments
- perform side effects like API calls and routing transitions
- Call non-pure fucntions, `Date.now()`, `Math.random`

## Reducers manage just a piece of state

    function visibilityFilter(state = SHOW_ALL, action) {
      switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return action.filter
        default:
          return state
      }
    }

## Combine Reducers

reduce boiler plate code

before:
    function todoApp(state = {}, action) {
      return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
      }
    }

after:
    import { combineReducers } from 'redux'

    const todoApp = combineReducers({
      visibilityFilter,
      todos
    })

All combineReducers() does is generate a function that calls your 
reducers with the slices of state selected according to their keys, 
and combining their results into a single object again.
