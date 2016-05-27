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
